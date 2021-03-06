const connection = require("./connection");

function getCategory(db = connection) {
  return db("category").select();
}

function getPostsByCategory(categoryId, location, db = connection) {
  let arr = categoryId.split(",");

  return db("posts")
    .join("categorise_posts", "categorise_posts.posts_id", "posts.id")
    .join("category", "categorise_posts.category_id", "category.id")
    .whereIn("categorise_posts.category_id", arr)
    .andWhere('posts.type', location)
}

function getPostDetailByID(id) {
  //return posts table
  //where id matches id
}

module.exports = {
  getCategory,
  getPostsByCategory
};
