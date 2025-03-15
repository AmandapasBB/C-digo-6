const express = require("express");
const mongoose = require("./db");
const cors = require("cors");
const filmesRoutes = require("./routes/filmesRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", filmesRoutes);

module.exports = app;
