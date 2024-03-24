const express = require('express');
const router = express.Router();
const authanticate = require('../middleware/authenticate.js');
const reviewController = require('../controller/review.controller.js'); 

router.post('/create',authanticate,reviewController.createReview)
router.get('/product/:productId' , authanticate, reviewController.getAllReview)

module.exports = router;