const express = require("express");
const app_routes = require(".");
const user_model = require("../models/user_models");
const user_routes = express.Router();

// http://localhost:3000/api/v1/users/user

user_routes.post("/user", (req, res) => {
  const user_new = user_model(req.body);
  user_new
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

user_routes.get("/users", (req, res) => {
  user_model
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

user_routes.get("/users/:id", (req, res) => {
  const { id } = req.params;
  user_model
    .findById()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
user_routes.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { username, lastname, age, document, email, adress, pets} = req.body;
  user_model
    .updateOne({ _id: id }, { $set: { username, lastname, age, document, email, adress, pets } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
user_routes.delete("/users/:id", (req, res) => {
    const { id } = req.params;
  user_model
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = user_routes;
