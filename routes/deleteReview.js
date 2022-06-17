const express = require('express')
const router = express.Router();
const deleteReview = require('../controllers/deleteReviews')

router.get('/', deleteReview.delete)

module.exports = router