# Movie Theater Ticket Manager
This project is a simple JavaScript-based web application designed to manage and update movie ticket data for a theater. It works with a JSON data structure containing a list of movies, allowing users to update key information such as ticket availability (tickets_sold) and theater capacity for each movie.

The application is built to simulate ticket management operations where movie details are dynamically updated based on specific conditions, making it useful for learning purposes or basic movie ticket management in a small theater.

## Key Features
Dynamic Ticket Update: Automatically sets the number of tickets_sold to 0, indicating all tickets are available for purchase.
Random Capacity Assignment: The theater's seating capacity (capacity) for each movie is updated to a random value between 50 and 150 to simulate varied theater sizes.
Interactive Frontend: The app features a simple UI that displays movie details fetched from the JSON dataset, allowing for real-time updates in the DOM when the buy ticket button is clicked.
Data Structure
The movie data is stored in a JSON array where each object represents a movie. Below is a breakdown of the attributes for each movie:

id (string): A unique identifier for each movie.
title (string): The name of the movie.
runtime (string): The duration of the movie in minutes.
capacity (integer): The maximum number of seats available for the movie.
showtime (string): The scheduled showtime for the movie.
tickets_sold (integer): The number of tickets that have already been sold for the show.
description (string): A brief description of the movie plot.
poster (string): URL to the movie's poster image.

Example JSON Entry


```
{
  "id": "1",
  "title": "The Giant Gila Monster",
  "runtime": "108",
  "capacity": 30,
  "showtime": "04:00PM",
  "tickets_sold": 20,
  "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
  "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
}
```

## How the Application Works
### Initial Setup
When the application is loaded, it fetches movie data from the JSON object and displays it on the page.
Each movie's tickets_sold value is immediately updated to 0, resetting the ticket sales for a new show.
The capacity of each theater showing the movie is updated to a random value between 50 and 150.

### Buying Tickets
The app includes a Buy Ticket button for each movie. When a user clicks the button:
The available tickets are decremented by one.
The UI is updated to reflect the new number of available tickets.
The data is synced with the backend (in the case of using a server) to keep the information persistent.
If there are no tickets left, the button becomes disabled, preventing further ticket purchases.

### Dynamic Updates
The app dynamically updates the DOM as follows:

The movie's available tickets are shown and updated in real-time when users purchase tickets.
If the page is refreshed, the current state (such as remaining tickets) is fetched and displayed.
Data Updates
The capacity for each movie is updated as soon as the page loads:

The capacity is randomly generated within the range of 50 to 150 seats, simulating the seating limits of various movie theaters.
Installation and Usage
Prerequisites
A web browser (Google Chrome, Mozilla Firefox, etc.)
Basic understanding of HTML, CSS, and JavaScript.
Steps
Clone the repository: First, clone the repository to your local machine.

```
git clone https://github.com/your-username/movie-ticket-manager.git
```
Navigate to the directory:


```
cd movie-ticket-manager
```
Open the application: Open the index.html file in your preferred browser by double-clicking or dragging it into the browser window.

View the movies and manage tickets: You will see the list of movies, their runtime, capacity, showtime, description, and poster images. Use the "Buy Ticket" button to simulate a ticket purchase.

### Customization

Updating Movie Data: You can add or modify movie entries by editing the JSON data within the JavaScript file.
Capacity Range: If you want to change the random capacity range, you can modify the code responsible for generating random values.

### Project Structure
```
movie-ticket-manager/
├── index.html           # Main HTML file
├── style.css            # Styling for the app
└── app.js               # JavaScript logic for fetching and updating movie data
```
index.html: Contains the structure for displaying the movies and buttons for ticket purchases.
style.css: Adds basic styling to the UI for better presentation.
app.js: Handles the logic of fetching, updating, and managing the movie data.
## Example Workflow
### Before ticket purchase:

Movie: "The Giant Gila Monster"
Capacity: 120
Tickets Sold: 0

### After one ticket purchase:

Movie: "The Giant Gila Monster"
Capacity: 120
Tickets Sold: 1
The app will continuously update this information each time a user clicks the Buy Ticket button.

# Future Improvements
Local Storage Integration: Save ticket purchases to local storage to retain data across browser sessions.
Backend Integration: Connect to a live database for persistent data management (currently using a static JSON approach).
User Authentication: Add user login functionality to track individual ticket purchases.
Contributing
Contributions are welcome! If you'd like to add new features, fix bugs, or improve the documentation, feel free to submit a pull request.

# License
This project is licensed under the MIT License, allowing anyone to use, modify, and distribute the code as long as they include the original license file in their projects.