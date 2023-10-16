const express = require('express');
const router = express.Router();

const jwt = require("express-jwt");
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});

const tripsController = require('../controllers/trips');


router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);


router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindCode);
  
module.exports = router;
