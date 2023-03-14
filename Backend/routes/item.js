const express = require("express");

const itemController = require("../controllers/item");

const imageUrl = require("../middleware/imageurl");

const router = express.Router();

router.get("/", itemController.items);

router.get("/:itemId", itemController.show);

router.post("/",imageUrl.uploadimage, itemController.create);

router.put("/:itemId",imageUrl.uploadimage, itemController.update);

router.delete("/:itemId", itemController.delete);

module.exports = router;
