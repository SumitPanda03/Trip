import mongoose from 'mongoose';// models/Flight.js

const flightSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  departureDate: Date,
  arrivalDate: Date,
  capacity: Number,
  // Add more flight-specific fields
});

export default mongoose.model("Flight", flightSchema)
