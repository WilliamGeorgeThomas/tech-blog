const router = require("express").Router();
// const Dish = require("../models/Dish");

// route to get all
router.get("/", async (req, res) => {
  res.render("all");
});

module.exports = router;
