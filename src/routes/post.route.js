const express = require("express");
const {
  create,
  allPost,
  postById,
  postByUserId,
} = require("../controllers/post.controller");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/", verifyToken, allPost);
router.get("/:postId", verifyToken, postById);
router.get("/user/:userId", verifyToken, postByUserId);

module.exports = router;
