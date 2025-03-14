const http = require("http");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

http
  .createServer(express)
  .listen(3000, () => console.log("Este servidor está rodando na porta 3000."));
