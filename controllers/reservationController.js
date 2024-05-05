const reservations = [];

const makeReservation = (req, res) => {
  const { userId, eventDate, numberOfGuests } = req.body;

  if (!userId || !eventDate || !numberOfGuests) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const eventDateObj = new Date(eventDate);

  if (eventDateObj <= new Date()) {
    return res.status(400).json({ message: "Event date must be in the future" });
  }

  if (numberOfGuests <= 0) {
    return res.status(400).json({ message: "Number of guests must be positive" });
  }

  const newReservation = {
    id: reservations.length + 1,
    userId,
    eventDate,
    numberOfGuests,
  };

  reservations.push(newReservation);

  res.status(201).json({
    message: "Reservation created successfully",
    reservation: newReservation,
  });
};

module.exports = {
  makeReservation,
};
