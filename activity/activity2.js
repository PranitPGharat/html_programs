// Declare variables to store personal information
// Using appropriate data types for each variable

// String for the name
let name = "John Doe"; 

// Number for the age
let age = 25; 

// String for the favorite color
let favoriteColor = "red"; 

// Array for the list of favorite hobbies
let favoriteHobbies = ["Reading", "Cycling", "Gaming"];

// Log all variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite Color:", favoriteColor);
console.log("Favorite Hobbies:", favoriteHobbies);

// Display a summary of the information on the webpage using document.write
document.write("<h1>Personal Information</h1>");
document.write("<p><strong>Name:</strong> " + name + "</p>");
document.write("<p><strong>Age:</strong> " + age + "</p>");
document.write("<p><strong>Favorite Color:</strong> " + favoriteColor + "</p>");
document.write("<p><strong>Favorite Hobbies:</strong></p>");
document.write("<ul>");

// Loop through the hobbies array to display each hobby as a list item
favoriteHobbies.forEach(function(hobby) {
    document.write("<li>" + hobby + "</li>");
});

document.write("</ul>");

// The program ends here
