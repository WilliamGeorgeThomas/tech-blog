const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");


Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

//post has many comments
//comment belongs to a user
//require and expore Comment

module.exports = { User, Post, Comment };
