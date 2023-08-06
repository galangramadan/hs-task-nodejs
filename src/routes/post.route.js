const express = require("express");
const { create, allPost } = require("../controllers/post.controller");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/", verifyToken, allPost);

module.exports = router;
