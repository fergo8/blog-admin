const express = require("express");
const consign = require("consign");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "app/views");

//app.use(express.static("./app/public"));

consign()
    .include("app/routes")
    .then("app/controllers")
    //.then("app/models")
    .into(app);

app.listen(port);
