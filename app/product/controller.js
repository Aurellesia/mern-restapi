const Product = require("./model");
const path = require("path");
const fs = require("fs");
const { Op } = require("sequelize");

const index = async (req, res) => {
  const { search } = req.query;
  let result = {};
  if (search) {
    try {
      result = await Product.findAll({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${search}%`,
            },
            price: search,
            stock: search,
          },
        },
      });
      res.send({
        status: "Success",
        data: result,
      });
    } catch (e) {
      res.send({
        status: "Failed",
        message: e,
      });
    }
  } else {
    try {
      const result = await Product.findAll();
      res.send({
        status: "Success",
        data: result,
      });
    } catch (e) {
      res.send({
        status: "Failed",
        message: e,
      });
    }
  }
};

const view = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findAll({
      where: {
        id,
      },
    });
    res.send({
      status: "Success",
      data: result,
    });
  } catch (e) {
    res.send({
      status: "Failed",
      message: e,
    });
  }
};

const store = async (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    try {
      const result = await Product.create({
        name,
        price,
        stock,
        status,
        image_url: `http://localhost:3000/public/${image.originalname}`,
      });
      res.send({
        status: "Success",
        data: result,
      });
    } catch (e) {
      res.send({
        status: "Failed",
        message: e,
      });
    }
  }
};

const update = async (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  const id = req.params.id;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    try {
      await Product.update(
        {
          name,
          price,
          stock,
          status,
          image_url: `http://localhost:3000/public/${image.originalname}`,
        },
        {
          where: {
            id,
          },
        }
      );
      res.send({
        status: "Success",
      });
    } catch (e) {
      res.send({
        status: "Failed",
        message: e,
      });
    }
  } else {
    try {
      await Product.update(
        {
          name,
          price,
          stock,
          status,
        },
        {
          where: {
            id,
          },
        }
      );
      res.send({
        status: "Success",
      });
    } catch (e) {
      res.send({
        status: "Failed",
        message: e,
      });
    }
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "Success",
    });
  } catch (e) {
    res.send({
      status: "Failed",
      message: e,
    });
  }
};

module.exports = { index, store, view, update, destroy };
