const express = require("express");
const router = express.Router();
const Post = require("../models/post");

  // Get All
  router.get("/api/all", (req, res) => {
    Post.findAll({}).then((results) => res.json(results));
  });

  // Add
  router.post("/api/new", (req, res) => {
    console.log("Post Data:");
    console.log(req.body);

    Post.create({
      author: req.body.author,
      body: req.body.body,
      createdAt: req.body.createdAt,
    }).then((results) => res.json(results));
  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });

module.exports = router;
