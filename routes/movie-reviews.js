const express = require('express')
const router = express.Router();
const movieReviewController = require('../controllers/movieReviewController')

router.get('/', movieReviewController.getMovies)

module.exports = router