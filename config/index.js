/** @format */
// PATH: CONFIG/INDEX.JS

/* THIS FILE WILL IMPORT DOTENV FOR WORKING WITH AND USING ENVIRONMENT
 VARIABLES IN OUR APPLICATION. */

import dotenv from "dotenv";

const envLocated = dotenv.config();

// IF ENV FILE IS NOT FOUND, THROW AN ERROR STATING THE ENV FILE COULDN'T BE FOUND
if (!envLocated) {
  throw new Error(
    "Sorry, could not locate .env file! Try searching for a 'config' directory in the root of your project, or create a new .env file."
  );
}

// NOW WE NEED TO EXPORT THE FUNCTIONALITY OF THIS CODE
export default envLocated;
