const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");

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
      created_at: req.body.created_at,
    }).then((results) => res.json(results));
  });

  // Delete
  router.delete('/api/posts/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

module.exports = router;
