// Module
const Produto = require("../models/Produto");

// GET ALL
exports.getAll = (req, res, next) => {
  Produto.findAll().then((result) => res.json(result));
};

// GET ONE
exports.getOne = (req, res, next) => {
  id = req.params.id;
  Produto.findByPk(id).then((result) => res.json(result));
};

// POST
exports.post = (req, res, next) => {
  data = req.body;
  if (data["nome"].trim() && typeof data["valor"] == "number") {
    Produto.create({
      nome: data["nome"],
      valor: data["valor"],
    });
    res.sendStatus(200);
  }
  res.sendStatus(404);
};

// PUT
exports.put = (req, res, next) => {
  id = req.params.id;
  data = req.body;
  if (data["nome"].trim() && typeof data["valor"] == "number") {
    Produto.findByPk(id)
      .then(
        (result) => (
          (result.nome = data["nome"]),
          (result.valor = data["valor"]),
          result.save()
        )
      )
      .catch((err) => res.sendStatus(404));
    res.sendStatus(200);
  }
  res.sendStatus(404);
};

// DELETE
exports.delete = (req, res, next) => {
  id = req.params.id;
  Produto.destroy({ where: { id: id } });
  res.sendStatus(200);
};
