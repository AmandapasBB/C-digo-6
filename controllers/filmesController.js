const Filme = require("../models/Filme");

// Listar todos os filmes
exports.listarFilmes = async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.json(filmes);
  } catch (error) {
    res
      .status(500)
      .json({ erro: "Erro ao buscar os filmes", detalhes: error.message });
  }
};

// Buscar um filme por ID
exports.buscarFilmePorId = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (!filme) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }
    res.json(filme);
  } catch (error) {
    res
      .status(400)
      .json({ erro: "Erro ao buscar o filme", detalhes: error.message });
  }
};

// ✅ Filtrar filmes por múltiplas tags
exports.filtrarFilmes = async (req, res) => {
  try {
    const { subgenero, ambiente, acontecimento, periodo } = req.query;
    let filtros = {};

    // 🔹 Adiciona apenas os filtros que foram preenchidos
    if (subgenero && subgenero !== "")
      filtros.subgenero = { $regex: subgenero, $options: "i" };
    if (ambiente && ambiente !== "")
      filtros.ambiente = { $regex: ambiente, $options: "i" };
    if (acontecimento && acontecimento !== "")
      filtros.acontecimento = { $regex: acontecimento, $options: "i" };
    if (periodo && periodo !== "")
      filtros.periodo = { $regex: periodo, $options: "i" };

    console.log("🔎 Filtros recebidos:", filtros); // Verifica os filtros que foram aplicados

    let filmes;

    // Se não bateu, retorna todos os filmes
    if (Object.keys(filtros).length === 0) {
      console.log("⚠ Nenhum filtro foi enviado. Retornando todos os filmes.");
      filmes = await Filme.find();
    } else {
      //  Busca os filmes de acordo com os filtros 
      filmes = await Filme.find(filtros);

      //  Se não acha, tenta com menos filtros
      if (filmes.length === 0) {
        console.log(
          "⚠ Nenhum filme encontrado com todos os filtros. Tentando com pelo menos um..."
        );

        const chaves = Object.keys(filtros);
        if (chaves.length > 0) {
          let filtroMenosRestrito = {};
          filtroMenosRestrito[chaves[0]] = filtros[chaves[0]];
          filmes = await Filme.find(filtroMenosRestrito);
        }
      }
    }

    res.json(filmes);
  } catch (error) {
    console.error("❌ Erro ao buscar os filmes:", error);
    res
      .status(400)
      .json({ erro: "Erro ao buscar o filme", detalhes: error.message });
  }
};

// Criar um novo filme
exports.criarFilme = async (req, res) => {
  try {
    const novoFilme = await Filme.create(req.body);
    res.status(201).json(novoFilme);
  } catch (error) {
    res
      .status(400)
      .json({ erro: "Erro ao cadastrar o filme", detalhes: error.message });
  }
};

// Atualizar um filme por ID
exports.atualizarFilme = async (req, res) => {
  try {
    const filmeAtualizado = await Filme.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!filmeAtualizado) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }
    res.json(filmeAtualizado);
  } catch (error) {
    res
      .status(400)
      .json({ erro: "Erro ao atualizar o filme", detalhes: error.message });
  }
};

// Deletar um filme por ID
exports.deletarFilme = async (req, res) => {
  try {
    const filmeDeletado = await Filme.findByIdAndDelete(req.params.id);
    if (!filmeDeletado) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }
    res.json({ mensagem: "Filme deletado com sucesso!" });
  } catch (error) {
    res
      .status(400)
      .json({ erro: "Erro ao deletar o filme", detalhes: error.message });
  }
};
