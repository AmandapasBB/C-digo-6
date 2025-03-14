const mongoose = require("mongoose");
const { Schema } = mongoose;

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  ano: { type: Number, required: true },
  subgenero: {
    type: String,
    enum: [
      "Psicológico",
      "Gore",
      "Slash",
      "Trash",
      "Sobrenatural",
      "Ficção científica",
      "Body horror",
      "Zumbis",
      "Monstros",
      "Canibalismo",
      "Found Footage",
      "Comédia de terror",
      "Suspense",
    ],
    required: true,
  },
  ambiente: {
    type: String,
    enum: [
      "Casa abandonada",
      "Cabana na floresta",
      "Apartamento",
      "Escola",
      "Floresta",
      "Lago",
      "Cidade pequena",
      "Parque de diversões",
      "Hotel",
      "Cemitério",
      "Hospital",
      "Laboratório",
      "Base militar",
      "Dimensão Alternativa",
      "Sonho/Pesadelo",
      "Casa",
    ],
    required: true,
  },
  acontecimento: {
    type: String,
    enum: [
      "Aparição Fantasmagórica",
      "Possessão Demoníaca",
      "Exorcismo",
      "Poltergeist",
      "Objetos Amaldiçoados",
      "Projeção Astral",
      "Mutilação",
      "Sacrifício Humano",
      "Canibalismo",
      "Autópsia / Experimentação Humana",
      "Zumbis",
      "Vampiros",
      "Lobisomens",
      "Criaturas Mutantes",
      "Seres de Outro Mundo / Alienígenas",
      "Cultos Satânicos",
      "Maldição Ancestral",
      "Rituais de Magia Negra",
      "Bruxaria",
      "Hospitais / Sanatórios Abandonados",
      "Serial Killer",
      "Sequestro e Tortura",
      "Dimensões Paralelas",
    ],
    required: true,
  },
  periodo: { type: String, enum: ["Antigo", "Atual"], required: true },
  quantidade: {
    type: String,
    enum: ["Solo", "Sequência", "Trilogia", "Frânquia"],
    required: true,
  },
  capa: { type: String, required: true }, //Aqui vai a URL da imagem//
});

const Filme = mongoose.model("Filme", FilmeSchema);

module.exports = Filme;
