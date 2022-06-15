const express = require('express')
const mysql = require('mysql')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const PORT = 5000

const movieReviews = require('./routes/movie-reviews')
const addReview = require('./routes/addReview')
const deleteReview = require('./routes/deleteReview')
const editReview = require('./routes/editReview')
const review = require('./routes/review')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('pages/index')
})
app.use('/movie-reviews', movieReviews)
app.use('/', review)
app.use('/addReview', addReview)
app.use('/editReview', editReview)
app.use('/delete', deleteReview)



app.listen(PORT, () => `http://localhost:${PORT}`)