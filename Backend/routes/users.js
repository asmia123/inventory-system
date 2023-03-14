const express = require("express");

const userController = require("../controllers/users");

const imageUrl = require('../middleware/imageurl')

const router = express.Router();

router.get("/", userController.users);

router.get("/:userId", userController.show);

router.post("/", imageUrl.uploadimage, userController.register);

router.put("/:userId", imageUrl.uploadimage, userController.update);

router.delete("/:userId", userController.delete);

module.exports = router;