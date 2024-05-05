const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController"); // Import controller

// POST /api/users - Add a new contact
router.post("/", contactController.addContact);

module.exports = router;
