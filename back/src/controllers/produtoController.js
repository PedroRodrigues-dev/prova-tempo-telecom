// GET ALL
exports.getAll = (req, res, next) => {
  res.send("GETALL Produto");
};

// GET ONE
exports.getOne = (req, res, next) => {
  id = req.params.id;
  res.send("GETONE Produto " + id);
};

// POST
exports.post = (req, res, next) => {
  res.send("POST Produto");
};

// PUT
exports.put = (req, res, next) => {
  id = req.params.id;
  res.send("PUT Produto " + id);
};

// DELETE
exports.delete = (req, res, next) => {
  id = req.params.id;
  res.send("DELETE Produto " + id);
};
