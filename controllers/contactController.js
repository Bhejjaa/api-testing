const contacts = []; // In-memory storage for contacts

const addContact = (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const contactExists = contacts.some((contact) => contact.phone === phone);

  if (contactExists) {
    return res.status(400).json({ message: "Phone number already exists" });
  }

  const newContact = { id: contacts.length + 1, name, phone, email };
  contacts.push(newContact);

  res.status(201).json({
    message: "Contact added successfully",
    contact: newContact,
  });
};

module.exports = {
  addContact,
};
