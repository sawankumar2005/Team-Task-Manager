const express = require("express");

const {
  createProject,
  getProjects,
  addMember,
} = require("../controllers/projectController");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  adminOnly,
} = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  adminOnly,
  createProject
);

router.get(
  "/",
  protect,
  getProjects
);

router.put(
  "/:id/add-member",
  protect,
  adminOnly,
  addMember
);

module.exports = router;