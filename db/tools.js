/** @format */
// PATH: DB/TOOLS.JS
// THIS FILE WILL ALLOW US TO EXECUTE SQL QUERIES ON OUR DATABASE
import connection from "./index";
// qryStr is the query string that will be executed on the database
// values is an array of values to be used in the query
const query = async (qryStr, values) => {
  // this is just a try catch block to handle any errors that may arise throughout the process. With 
  try {
    return new Promise((resolve, reject) => {
      connection.query(qryStr, values, (err, results) => {
        if (err) {
          reject(
            `Error occurred while executing the query "${qryStr}" with values "${values}". Error message: ${err.message}`
          );
        } else {
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.error(
      `An error occurred while trying to execute a database query. Error message: ${error.message}`
    );
  }
};

export default query;
