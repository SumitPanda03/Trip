// routes/flightRoutes.js
import express from "express";
const router = express.Router();
import { getFlights } from "../controllers/flight.js";

// Define flight routes
router.get('/', getFlights);
// router.post('/', setFlights)
// router.get('/:id', getFlightById);
// Add more routes for flight booking, searching, etc.

export default router;

