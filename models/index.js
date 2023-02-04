const User = require("./User");
const Post = require("./Post");

Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

//post has many comments
//comment belongs to a user
//require and expore Comment

module.exports = { User, Post };
