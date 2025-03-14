const app = require("./app"); // Importa o app configurado
const PORT = 3000;

// 🔹 Apenas inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 API rodando na porta ${PORT}`);
});
