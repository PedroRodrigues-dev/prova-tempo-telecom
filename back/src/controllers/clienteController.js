// GET ALL
exports.getAll = (req, res, next) => {
  res.send("GETALL Cliente");
};

// GET ONE
exports.getOne = (req, res, next) => {
  id = req.params.id;
  res.send("GETONE Cliente " + id);
};

// POST
exports.post = (req, res, next) => {
  res.send("POST Cliente");
};

// PUT
exports.put = (req, res, next) => {
  id = req.params.id;
  res.send("PUT Cliente " + id);
};

// DELETE
exports.delete = (req, res, next) => {
  id = req.params.id;
  res.send("DELETE Cliente " + id);
};
