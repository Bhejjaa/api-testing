const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

// POST /api/book-appointment - Book an appointment
router.post("/", appointmentController.bookAppointment);

module.exports = router;
