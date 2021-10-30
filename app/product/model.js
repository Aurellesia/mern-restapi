const { DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");

const Product = sequelize.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
});

(async () => {
  await Product.sync();
})();

module.exports = Product;
