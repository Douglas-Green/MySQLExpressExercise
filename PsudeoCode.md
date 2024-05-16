 # Please note:
  This is psuedocode for a complete Full Stack App, though in this repo I am only showcasing what is required to complete my classes exercise within this structure. This is only for myself to better understand the overall picture to my project. It also serves as a guideline as to the direction I should be moving in order to finish the exercise in a timely manor. So I will only be focused on the CRUD functionality of this project minus the the building of the entire app. If you want to view the project in its entirety you can search my repos for my final project in which I will be highlighting all of these steps and any other steps I may have overlooked while creating this file. Thanks and I hope you find this helpful. 
 
 
# Full-Stack CRUD Application Pseudocode

# MySQL (Database)
  - Install MySQL server and client if not already installed
  - Log into MySQL client with root or appropriate user credentials
  - Create a new database for the application
  - Use the new database
  - Create a new table for products with necessary columns (like# Full-Stack CRUD Application Pseudocode

Please note:
This is pseudocode for a complete Full Stack App. In this repo, I am only showcasing what is required to complete my class exercise within this structure. This is for my understanding of the overall project. It serves as a guideline for the direction I should be moving in to finish the exercise timely. I will only be focused on the CRUD functionality of this project, minus the building of the entire app. If you want to view the project in its entirety, you can search my repos for my final project where I will be highlighting all these steps and any other steps I may have overlooked while creating this file. Thanks, and I hope you find this helpful.

## MySQL (Database)
- Install MySQL server and client if not already installed
- Log into MySQL client with root or appropriate user credentials
- Create a new database for the application
- Use the new database
- Create a new table for products with necessary columns (like id, name, description, price, etc.)
- Define primary key, foreign keys, and indexes as necessary
- Insert some initial data into the products table for testing purposes
- Exit the MySQL client

## Server-Side (Nodejs, Express)
- Set up a new Node.js and Express server
- Set up a new React application
- Install necessary libraries (React, ReactDOM, Express, MySQL, etc.)
- Define routes for CRUD operations (Create, Read, Update, Delete)
- Implement middleware for handling requests and responses
- Connect to the MySQL database and perform CRUD operations using SQL queries

## Client-Side (React)
### App Component
- Define the App component
- Initialize state variables (using `useState`) for data storage and UI control
- Use `useEffect` to fetch data from the server on component mount
- Define functions to handle user interactions (clicks, form submissions, etc.) and CRUD operations

### Header Component
- Define the Header component
- Display the app title and navigation links

### ProductList Component
- Fetch product data from the server and store it in state
- Map over the product data in state and display each product in a Product component

### Product Component
- Display product details
- Include buttons for edit and delete operations
- On edit button click, show a form with pre-filled product data
- On form submit, send a PUT request to the server to update the product
- On delete button click, send a DELETE request to the server to delete the product

### AddProduct Component
- Show a form to add a new product
- On form submit, send a POST request to the server to create a new product

## Render the App
- Use `ReactDOM.render` to render the App component into the root div id, name, description, price, etc.)
  - Define primary key, foreign keys, and indexes as necessary
  - Insert some initial data into the products table for testing purposes
  - Exit the MySQL client


# Server-Side (Nodejs, Express)
  - Set up a new Node.js and Express server
  - Set up a new React application
  - Install necessary libraries (React, ReactDOM, Express, MySQL, etc.)
  - Define routes for CRUD operations (Create, Read, Update, Delete)
  - Implement middleware for handling requests and responses
  - Connect to the MySQL database and perform CRUD operations using SQL queries



# Client-Side (React)**
  - **App Component**
    - Define the App component
    - Initialize state variables (using `useState`) for data storage and UI control
    - Use `useEffect` to fetch data from the server on component mount
    - Define functions to handle user interactions (clicks, form submissions, etc.) and CRUD operations

  - **Header Component**
    - Define the Header component
    - Display the app title and navigation links

  - **ProductList Component**
    - Fetch product data from the server and store it in state
    - Map over the product data in state and display each product in a Product component

  - **Product Component**
    - Display product details
    - Include buttons for edit and delete operations
    - On edit button click, show a form with pre-filled product data
    - On form submit, send a PUT request to the server to update the product
    - On delete button click, send a DELETE request to the server to delete the product

  - **AddProduct Component**
    - Show a form to add a new product
    - On form submit, send a POST request to the server to create a new product

- **Render the App**
  - Use `ReactDOM.render` to render the App component into the root div