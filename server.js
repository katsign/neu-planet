// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('app/public'));

// Routes
const routes = require('./app/routes/api-routes.js');

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`==> 💫 Server Listening on http://localhost:${PORT}/`));
