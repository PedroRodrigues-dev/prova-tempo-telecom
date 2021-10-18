// Modules
const express = require("express");
const app = express();
const clienteRoute = require("./src/routes/clienteRoute");
const produtoRoute = require("./src/routes/produtoRoute");
const pedidoRoute = require("./src/routes/pedidoRoute");

// Routes
app.use("/Clientes", clienteRoute);
app.use("/Produtos", produtoRoute);
app.use("/Pedidos", pedidoRoute);

// Others
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running in " + PORT);
});
