const express = require('express');

const { register, login } = require("./controllers/auth.controller");

const app = express();

var cors = require("cors")

app.use(express.json());
app.use(cors())

app.post("/register", register);
app.post("/login", login);


module.exports = app;