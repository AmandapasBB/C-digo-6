const express = require("express");
const mongoose = require("./db");
const filmesRoutes = require("./routes/filmesRoutes");

const app = express();

app.use(express.json());
app.use("/api", filmesRoutes);

module.exports = app;
