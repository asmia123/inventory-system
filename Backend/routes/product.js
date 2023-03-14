const express = require("express");

const productController = require("../controllers/product");

const imageUrl = require("../middleware/imageurl");

const router = express.Router();

router.get("/", productController.products);

router.get("/:productId", productController.show);

router.post("/",imageUrl.uploadimage, productController.create);

router.put("/:productId",imageUrl.uploadimage, productController.update);

router.delete("/:productId", productController.delete);

module.exports = router;
