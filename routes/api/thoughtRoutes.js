const router = require("express").Router();
const {
  createThought,
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

router.route("/").get(getThought).post(createThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
