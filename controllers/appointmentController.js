const bookAppointment = (req, res) => {
    const { date, time } = req.body;
  
    if (!date || !time) {
      return res.status(400).json({ message: "Date and time are required" });
    }
  
    const appointmentDate = new Date(`${date}T${time}`);
    const now = new Date();
  
    if (appointmentDate <= now) {
      return res.status(400).json({ message: "Appointment date must be in the future" });
    }
  
    if (time === "15:00") {
      return res.status(409).json({ message: "Time slot 15:00 is unavailable" });
    }
  
    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: {
        date,
        time,
      },
    });
  };
  
  module.exports = {
    bookAppointment,
  };
  