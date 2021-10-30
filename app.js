const express = require("express");
const router = require("express").Router();
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const productRoute = require("./app/product/routes");

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/public", express.static(path.join(__dirname, "uploads")));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/app.html"));
});

app.use("/", router);
app.use("/product", productRoute);

app.use((req, res) => {
  res.status(404);
  res.send({
    status: "Failed",
    message: `Resource ${req.originalUrl} not found`,
  });
});

app.listen(port, () => {
  console.log("Server listening at http://localhost:3000");
});
