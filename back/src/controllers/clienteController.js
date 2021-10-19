// Module
const Cliente = require("../models/Cliente");

// GET ALL
exports.getAll = (req, res, next) => {
  Cliente.findAll().then((result) => res.json(result));
};

// GET ONE
exports.getOne = (req, res, next) => {
  id = req.params.id;
  Cliente.findByPk(id).then((result) => res.json(result));
};

// POST
exports.post = (req, res, next) => {
  data = req.body;
  if (
    data["nome"].trim() &&
    data["telefone"].trim() &&
    data["data_nascimento"].trim()
  ) {
    Cliente.create({
      nome: data["nome"],
      telefone: data["telefone"],
      data_nascimento: data["data_nascimento"],
    });
    res.sendStatus(200);
  }
  res.sendStatus(404);
};

// PUT
exports.put = (req, res, next) => {
  id = req.params.id;
  data = req.body;
  if (
    data["nome"].trim() &&
    data["telefone"].trim() &&
    data["data_nascimento"].trim()
  ) {
    Cliente.findByPk(id).then(
      (result) => (
        (result.nome = data["nome"]),
        (result.telefone = data["telefone"]),
        (result.data_nascimento = data["data_nascimento"]),
        result.save()
      )
    );
  }
  res.sendStatus(200);
};

// DELETE
exports.delete = (req, res, next) => {
  id = req.params.id;
  Cliente.destroy({ where: { id: id } });
  res.sendStatus(200);
};
