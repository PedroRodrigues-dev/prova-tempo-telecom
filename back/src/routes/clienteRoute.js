const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.get("/", clienteController.getAll);
router.get("/:id", clienteController.getOne);
router.post("/", clienteController.post);
router.put("/:id", clienteController.put);
router.delete("/:id", clienteController.delete);

module.exports = router;
