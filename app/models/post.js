const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Post = sequelize.define('post', {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  createdAt: Sequelize.DATE,
});

Post.sync();

module.exports = Post;
