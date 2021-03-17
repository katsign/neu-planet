const Post = require("../models/post.js");

// Routes
module.exports = (app) => {
  // Get All
  app.get("/api/all", (req, res) => {
    Post.findAll({}).then((results) => res.json(results));
  });

  // Add
  app.post("/api/new", (req, res) => {
    console.log("Post Data:");
    console.log(req.body);

    Post.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at,
    }).then((results) => res.json(results));
  });
};
