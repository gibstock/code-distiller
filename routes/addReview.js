const express = require('express')
const router = express.Router();
const addReview = require('../controllers/addReviewController')

router.get('/', addReview.renderReviewPage)
router.post('/', addReview.insertReview)

module.exports = router