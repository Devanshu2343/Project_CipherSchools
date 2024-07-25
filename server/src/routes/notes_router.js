const express = require("express");
const router = express.Router();
const notesController = require("../controller/notes_controller");

router.post("/", notesController.createNote);

router.get("/", notesController.getNote);

router.get("/all", notesController.getAllNotes);

router.patch("/", notesController.updateNotes);

router.delete("/", notesController.deleteNotes);

module.exports = router;