const express = require("express");

const brandController = require("../controllers/brand");

const router = express.Router();

router.get("/", brandController.brands);

router.get("/:brandId", brandController.show);

router.post("/", brandController.create);

router.put("/:brandId", brandController.update);

router.delete("/:brandId", brandController.delete);

module.exports = router;
