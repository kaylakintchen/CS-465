const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router 
    .route('/trips')
    .get(tripsController.tripsList);

    // Added 10/12 
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsList)

    // Added 10/12
router.route("/trips/:tripCode").get(tripsController.tripsFindCode);

module.exports = router;
