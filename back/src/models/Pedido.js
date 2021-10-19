const Sequelize = require("sequelize");
const database = require("../config/database");

const Pedido = database.define("pedidos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cliente_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: { model: "clientes", key: "id" },
    onDelete: "CASCADE",
  },
  produto_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: { model: "produtos", key: "id" },
  },
});

module.exports = Pedido;
