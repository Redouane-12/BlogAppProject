const express = require("express");
const Router = express.Router();
const fs = require("fs");
const { show, add, update, remove } = require("../controllers/Controller");
const errorH = require("../middlewares/errorH.js");
const notFound = require("../middlewares/notFound.js");

const log = require("../middlewares/log.js");
const { error } = require("console");

Router.use(log);
Router.route("/").get(show).post(add);

Router.route("/:id").put(update).delete(remove);

Router.use(notFound);

Router.use(errorH);

module.exports = Router;
