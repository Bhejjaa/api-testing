const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Importing routes
const contactRoutes = require("./routes/contactRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// Use the imported routes
app.use("/api/users", contactRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/book-appointment", appointmentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
