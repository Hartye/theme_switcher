const express = require("express");
const app = express();
const routes = require("./routes.js");
const { join } = require("path");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.set("views", join(__dirname, "views"));

app.use(routes);

app.listen(2000, () => console.log("running on port 2000"));
