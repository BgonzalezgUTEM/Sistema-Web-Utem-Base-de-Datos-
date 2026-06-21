const express = require('express');
const router = express.Router();
const offerController =
require('../controllers/offer.controller');
router.post(
'/create-offer',
offerController.createOffer
);
module.exports = router;
