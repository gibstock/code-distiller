const express = require('express')
const router = express.Router();
const addReview = require('../controllers/addReviewController')
const { body } = require('express-validator')


router.get('/', addReview.renderReviewPage)
router.post('/', 
  body('title').not().isEmpty().trim().escape(), 
  body('author').not().isEmpty().trim().escape(),
  body('metaTitle').not().isEmpty().trim().escape(),
  body('summary').not().isEmpty().trim().escape(),
  body('slug').not().isEmpty().trim().escape(),
  body('content').not().isEmpty().trim().escape(),
  body('stars').not().isEmpty().trim().escape(),
  body('attribution').not().isEmpty().trim().escape(),
  body('photoCredit').not().isEmpty().trim().escape(),
  addReview.insertReview)

module.exports = router