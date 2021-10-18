// GET ALL
exports.getAll = (req, res, next) => {
  res.send("GETALL Pedido");
};

// GET ONE
exports.getOne = (req, res, next) => {
  id = req.params.id;
  res.send("GETONE Pedido " + id);
};

// POST
exports.post = (req, res, next) => {
  res.send("POST Pedido");
};

// PUT
exports.put = (req, res, next) => {
  id = req.params.id;
  res.send("PUT Pedido " + id);
};

// DELETE
exports.delete = (req, res, next) => {
  id = req.params.id;
  res.send("DELETE Pedido " + id);
};
