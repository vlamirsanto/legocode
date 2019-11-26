const express = require("express");
const MainController = require("./controllers/MainController");

const routes = new express.Router();

routes.get("/", MainController.index);

module.exports = routes;
