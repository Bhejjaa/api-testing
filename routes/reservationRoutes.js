const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

// POST /api/reservations - Make a reservation
router.post("/", reservationController.makeReservation);

module.exports = router;
