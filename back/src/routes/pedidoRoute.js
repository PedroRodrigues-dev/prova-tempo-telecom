const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");

router.get("/", pedidoController.getAll);
router.get("/:id", pedidoController.getOne);
router.post("/", pedidoController.post);
router.put("/:id", pedidoController.put);
router.delete("/:id", pedidoController.delete);

module.exports = router;
