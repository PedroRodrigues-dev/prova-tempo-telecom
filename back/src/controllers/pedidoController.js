// Module
const Pedido = require("../models/Pedido");

// Variables
var numeroPedido = 0;

// GET ALL
exports.getAll = (req, res, next) => {
  Pedido.findAll().then((result) => res.json(result));
};

// GET ONE
exports.getOne = (req, res, next) => {
  id = req.params.id;
  Pedido.findByPk(id).then((result) => res.json(result));
};

// POST
exports.post = (req, res, next) => {
  data = req.body;
  numeroPedido++;
  for (i = 1; i < Object.keys(data).length; i++) {
    Pedido.create({
      numero: numeroPedido,
      cliente_id: data["cliente_id"],
      produto_id: data[`produto_id${i}`],
    });
  }
  res.sendStatus(200);
};

// PUT
exports.put = (req, res, next) => {
  id = req.params.id;
  data = req.body;
  Pedido.findByPk(id).then(
    (result) => (
      (result.cliente_id = data["cliente_id"]),
      (result.produto_id = data["produto_id"]),
      result.save()
    )
  );
  res.sendStatus(200);
};

// DELETE
exports.delete = (req, res, next) => {
  id = req.params.id;
  Pedido.destroy({ where: { id: id } });
  res.sendStatus(200);
};
