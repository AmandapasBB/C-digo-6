const express = require("express");
const filmesController = require("../controllers/filmesController");
const router = express.Router();

// ✅ Rota de teste para verificar se a API está funcionando
router.get("/", (req, res) => {
  res.send("API de Filmes de Terror está funcionando! 🎃");
});

// ✅ Rotas principais
router.get("/filmes", filmesController.listarFilmes);
router.get("/filmes/:id", filmesController.buscarFilmePorId);
router.get("/filmes/filtro-multiplas", filmesController.filtrarFilmes);
router.post("/filmes", filmesController.criarFilme);
router.put("/filmes/:id", filmesController.atualizarFilme);
router.delete("/filmes/:id", filmesController.deletarFilme);

module.exports = router;
