const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const productController = require("./controller");

router.get("/", productController.index);
router.get("/:id", productController.view);
router.post("/", upload.single("image"), productController.store);
router.put("/:id", upload.single("image"), productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;
