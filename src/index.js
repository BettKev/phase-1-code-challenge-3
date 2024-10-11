
document.addEventListener("DOMContentLoaded", (event) => {
    // event.prveventDefault()
    // A function to fetch movie titles from db.json
    function getMovieDetails() {
        fetch('http://localhost:3000/films/1')  // Adjust the URL if needed
            .then(response => response.json())
            .then(movie => {
                // Extract details
                const { title, runtime, showtime, capacity, tickets_sold, poster } = movie;
                
                // Calculate available tickets
                const availableTickets = capacity - tickets_sold;
                
                // Update the DOM with movie details
                document.getElementById('movie-title').textContent = title;
                document.getElementById('movie-runtime').textContent = runtime;
                document.getElementById('movie-showtime').textContent = showtime;
                document.getElementById('movie-tickets').textContent = availableTickets;
                document.getElementById('movie-poster').src = poster;
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }

    // Call the function to get the movie details when the page loads
    getMovieDetails();
});

 // Function to fetch all movies and populate the menu
 function getAllMovies() {
    fetch('http://localhost:3000/films')  // Adjust the URL if needed
        .then(response => response.json())
        .then(movies => {
            const filmsList = document.getElementById('films');
            // Remove the hardcoded placeholder
            filmsList.innerHTML = '';

            // Loop through the movie data and create a list item for each movie
            movies.forEach(movie => {
                const li = document.createElement('li');
                li.classList.add('film', 'item');
                li.textContent = movie.title;
                
                // Add a click event to load the movie details when clicked
                li.addEventListener('click', () => displayMovieDetails(movie));

                // Append the list item to the films menu
                filmsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
}

// Function to display movie details in the movie-details section
function displayMovieDetails(movie) {
    const { title, runtime, showtime, capacity, tickets_sold, poster } = movie;
    const availableTickets = capacity - tickets_sold;
    
    // Update the DOM with movie details
    document.getElementById('movie-title').textContent = title;
    document.getElementById('movie-runtime').textContent = runtime;
    document.getElementById('movie-showtime').textContent = showtime;
    document.getElementById('movie-tickets').textContent = availableTickets;
    document.getElementById('movie-poster').src = poster;
}

// Fetch all movies and populate the menu when the page loads
getAllMovies();
