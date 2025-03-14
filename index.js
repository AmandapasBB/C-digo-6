const express = require("express");
const mongoose = require("./db"); // Conexão com o banco
const filmesRoutes = require("./routes/filmesRoutes"); // Importando as rotas

const app = express(); // 🔹 Definição do app deve vir antes do app.use()

app.use(express.json()); // Habilita JSON no body das requisições
app.use("/api", filmesRoutes); // 🔹 Agora a variável app já está definida

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 API rodando na porta ${PORT}`));
