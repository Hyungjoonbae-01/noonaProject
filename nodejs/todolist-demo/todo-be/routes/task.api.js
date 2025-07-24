const express = require("express");
const router = express.Router();
const taskController = require("../controller/task.controller");

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", (req, res) => {
  res.send("delete task");
});

router.delete("/:id", (req, res) => {
  res.send("delete task");
});

module.exports = router;
