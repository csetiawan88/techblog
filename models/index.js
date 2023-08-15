// Import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User have many Posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// User have many Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Post belongsTo Users
Post.belongsTo(User, {
  /* if its post_id:null */
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Pst have many Comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
