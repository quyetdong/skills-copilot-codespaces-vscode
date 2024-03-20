// Create web server
// create a route for /comments
// create a route for /comments/new
// create a route for /comments/:id
// create a route for /comments/:id/edit

var express = require("express");
var router = express.Router();

// index route
router.get("/", function(req, res) {
   res.send("This is the comments index route");
});

// new route
router.get("/new", function(req, res) {
   res.send("This is the comments new route");
});

// create route
router.post("/", function(req, res) {
   res.send("This is the comments create route");
});

// show route
router.get("/:id", function(req, res) {
   res.send("This is the comments show route");
});

// edit route
router.get("/:id/edit", function(req, res) {
   res.send("This is the comments edit route");
});

// update route
router.put("/:id", function(req, res) {
   res.send("This is the comments update route");
});

// destroy route
router.delete("/:id", function(req, res) {
   res.send("This is the comments destroy route");
});

module.exports = router;
