// controllers/flightController.js
import Flight from "../models/Flight.js";


export const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Implement more controller functions for searching, booking, etc.
