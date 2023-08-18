const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChats,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChats);
router.route("/rename").put(protect, renameGroup);
router.route("/groupRemove").put(protect, removeFromGroup);
router.route("/groupAdd").put(protect, addToGroup);

module.exports = router;
