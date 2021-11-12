<img align="right" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>

# Book-Search

## Table of Contents
* <a href="#about">Link</a>
* <a href="#about">About</a>
* <a href="#preview">Preview</a>
* <a href="#user-story">User Story</a>
* <a href="#acceptance-criteria">Acceptance Criteria</a>
* <a href="#technologies">Technologies</a>

## Link
<b>Link to site:</b> https://codingnav-book-search.herokuapp.com/

## About 

<i><b>Book Search</b></i> is emblematic of the fact that most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. 


<i><b>Book Search</b></i> is a website where users can sign up and save their favorite books or books they want to purchase in the future.


## Preview
<img src="./client/public/screen.gif" alt="Web Page" width="100%">

## User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```


## Technologies
### Front End
<img align="middle" src="./client/public/html_css.png" alt="HTML5 and CSS" width="25%"/>&nbsp; &nbsp;
<img align="middle" src="./client/public/bootstrap.png" alt="Boostrap" width="12%"/>&nbsp; &nbsp; &nbsp; 
<img align="middle" src="./client/public/js.jpg" alt="Javascript" width="10%"/>&nbsp; &nbsp; &nbsp; 
<img align="middle" src="./client/public/react.png" alt="React" width="12%"/>

### Back End
<img align="middle" src="./client/public/nodejs.png" alt="Nodejs" width="20%"/> &nbsp; &nbsp; &nbsp; <img align="middle" src="./client/public/expressjs.png" alt="Express" width="20%"/> &nbsp; &nbsp; &nbsp; <img align="middle" src="./client/public/mongo.png" alt="Mongo" width="25%"/>