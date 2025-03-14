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
    const { subgenero, ambiente, acontecimento, periodo, quantidade } =
      req.query;
    let filtro = {};

    if (subgenero) filtro.subgenero = subgenero;
    if (ambiente) filtro.ambiente = ambiente;
    if (acontecimento) filtro.acontecimento = acontecimento;
    if (periodo) filtro.periodo = periodo;
    if (quantidade) filtro.quantidade = quantidade;

    const filmes = await Filme.find(filtro);

    if (filmes.length === 0) {
      return res
        .status(404)
        .json({ mensagem: "Nenhum filme encontrado com essas tags" });
    }

    res.json(filmes);
  } catch (error) {
    res
      .status(400)
      .json({ erro: "Erro ao buscar os filmes", detalhes: error.message });
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
