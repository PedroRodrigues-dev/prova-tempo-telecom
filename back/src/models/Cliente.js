const Sequelize = require("sequelize");
const database = require("../config/database");

const Cliente = database.define("clientes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Cliente;
