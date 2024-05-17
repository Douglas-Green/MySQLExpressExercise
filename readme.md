# Full-Stack MERN App

**This is a full stack MERN app built with Node.js, Express, MySQL, and React. Using React Router for navigation within the app.**

## !!!  Please Note !!!

Please note that this repository represents a subset of a larger, fully functional application developed as part of my coursework at [True Coders](https://www.truecoders.io). The purpose of this repository is to demonstrate specific aspects of C.R.U.D. functionality, utilizing Express and MySQL as the primary tech stacks for data manipulation between the application and the database.

For those interested in the comprehensive full-stack MERN application, please refer to the "Final Project" repository within my profile. The final project encompasses the complete functionality and will be updated with the final version of the code upon completion.

This exercise is an integral part of my learning journey at [True Coders](https://www.truecoders.io), and this repository serves as a showcase of the skills and concepts I've acquired.

This is only a fraction of the total functionality of the actual full stack app. Click this link [Final Project](https://www.github.com/Douglas-Green/FinaleProject) to view the working app in it’s entirety. 

## Prerequisites

[Node.js @latest](https://www.nodejs.org)

[Express @latest](https://expressjs.com/)

[React @latest](https://www.react.dev/)

## Installation

Clone the repository: First, you will need to clone the repository with the following code provided below.

git clone git@github.com:Douglas-Green/SqlExpress.git

cd into the newly cloned directory with the following code.

cd repo/name/here ! replace repo/name/here with the actual directory name !

Then you will want to run again the following code.

npm install

Next, you will want to set up your database. If your project uses a MySQL database, you will need to setup the database on your local machine. This process may vary depending on your project., but you’ll typically need to create a new database and run some SQL scripts to create the necessary tables.

After setting up the database, you will more than likely want to use environment variables (for example, to store the database connection details). You’ll need to set these up. This usually involves creating a .env file in the root of your project and adding the necessary variables. Please note that if you will be using [GitHub](https://github.com) for version control, you will want to set the env variables that your project will require in an example file (.env.example) as your actual env file will hold your private keys and you should never at any point either on purpose or mistakenly push your files publicly with the the env file included. This is why the example file should be used in place of . It is a great habit to find yourself following in always double checking whether or not your project contains a .gitignore file. This will as it says ignore files defined within it. So as to not mistakenly reveal to the world your private keys. Just something to be aware of.

Now, with your .env file stored safely within the root of your project directory you can now run the project. If you kept the project as a standard Node.js project, you can start the server with the following code.

npm start

### Troubleshooting

Check the error messages: Like always, if facing errors or failure to spin up the app. Check the browser terminal as well as your vs code terminal for hints as to what has gone wrong. Common issues include port conflicts, missing environment variables, or issues connecting to the database.

Check the port: Make sure the port you’re trying to use for your server isn’t being used by another service. You can change the port in your server configuration if necessary.

Check your environment variables: If your application uses environment variables (stored in a .env file), make sure they are set correctly. Missing or incorrect variables can cause your application to fail to start.

check your database connection: Make sure your server has been started and you have a successful message. Other than that you can make sure the database is running and that the connection details are correct. You can usually test the connection using a database.



## Author

* #### *Douglas Green*

## Acknowledgments

* [True Coders](https://www.truecoders.io)
* [Hunter Anderson](https://github.com/hunterandersen) Full Stack Instructor at True Coders
* All the Web Developers who have come before me, I truly stand on the shoulders of giants. ❤ Thank you to you all!! ❤ 

## Pseudocode

For a general English native language breakdown of the application structure and functionality, please refer to the [Pseudocode.md](Pseudocode.md) file.