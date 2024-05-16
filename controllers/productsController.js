/** @format */
// PATH: CONTROLLERS/PRODUCTSCONTROLLER.JS

/* THIS FILE IS A CONTROLLER ALLOWING US TO HANDLE OPERATIONS RELATED TO THE PRODUCTS WITHIN THE DATABASE. THESE ARE ASYNCHRONOUS FUNCTIONS, WHICH I COULD HAVE NAMED ANYTHING I LIKED, THOUGH I CHOSE TO STICK THE MYSQL KEYWORDS AS BEST AS POSSIBLE FOR CONSISTENCY PURPOSES */
import query from "../db/tools";
// ASYNC FOR SELECTING ALL PRODUCTS
export const selectAll = async () => {
  return await query("SELECT * FROM products");
};
// ASYNC FOR SELECTING ONE PRODUCT
export const selectOne = async productId => {
  return await query("SELECT * FROM products WHERE ProductId = ?", [productId]);
};
// ASYNC FOR INSERTING OR CREATING ONE PRODUCT
export const insertOne = async product => {
  return await query("INSESRT INTO products SET ?", [product]);
};
// ASYNC FOR UPDATING ONE PRODUCT
export const updateOne = async (productId, product) => {
  return await query("UPDATE products SET ? WHERE ProductId = ?", [
    product,
    productId,
  ]);
};
// ASYNC FOR REMOVING OR DELETING ONE PRODUCT
export const deleteOne = async productId => {
  return await query("DELETE FROM products WHERE ProductId = ?", [productId]);
};
