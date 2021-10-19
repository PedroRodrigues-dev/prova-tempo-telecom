// Modules
const express = require("express");
const app = express();
const clienteRoute = require("./src/routes/clienteRoute");
const produtoRoute = require("./src/routes/produtoRoute");
const pedidoRoute = require("./src/routes/pedidoRoute");

// Middlewares
app.use(express.json());

// Database ## sistema_produtos ##
(async () => {
  const database = require("./src/config/database");
  const Produto = require("./src/models/Produto");
  const Cliente = require("./src/models/Cliente");
  const Pedido = require("./src/models/Pedido");

  try {
    const resultado = await database.sync();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.log("Error to Connect with PostgreSQL");
  }
})();

// Routes
app.use("/Clientes", clienteRoute);
app.use("/Produtos", produtoRoute);
app.use("/Pedidos", pedidoRoute);

// HTTP error handling
app.use(function (req, res, next) {
  res.sendStatus(404);
});

// Others
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log("Running in " + PORT);
});
