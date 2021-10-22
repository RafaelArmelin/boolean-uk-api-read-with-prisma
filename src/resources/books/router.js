const express = require("express");

const {
  getAll,
  getOneById,
  getAllByChosenTopics,
  getRecentFictionBooks,
  getOldNonFictionBooks,
  createOneById,
} = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:type", getRecentFictionBooks);

router.get("/:topic", getAllByChosenTopics);

router.get("/:type", getOldNonFictionBooks);

router.get("/:id", getOneById);

router.post("/:id", createOneById);

// router.put("/id")

module.exports = router;
