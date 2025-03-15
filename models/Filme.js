const mongoose = require("mongoose");
const { Schema } = mongoose;

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  ano: { type: Number, required: true },
  subgenero: [{ type: String }], // ✅ Agora aceita um array de strings
  ambiente: [{ type: String }], // ✅ Agora aceita um array de strings
  acontecimento: [{ type: String }], // ✅ Agora aceita um array de strings
  periodo: { type: String, required: true },
  diretor: { type: String, required: true },
  sinopse: { type: String, required: true },
  capa: { type: String },
});

module.exports = mongoose.model("Filme", FilmeSchema);
