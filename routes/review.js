const express = require('express')
const router = express.Router();
const reviewController = require('../controllers/reviewController')

router.get('/:slug', reviewController.getReview)

module.exports = router