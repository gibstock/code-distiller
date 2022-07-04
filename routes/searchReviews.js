const express = require('express')
const router = express.Router();
const searchReviews = require('../controllers/searchReviewsController')

router.post('/', searchReviews.search)

module.exports = router