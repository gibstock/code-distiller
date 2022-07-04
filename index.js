const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const fs = require('fs')
const https = require('https')
const http = require('http')
const PORT = 5150
const mysql = require('mysql')


const httpServer = http.createServer(app)
httpServer.listen(PORT, ()=> console.log(`listening on http://localhost:${PORT}`))

const movieReviews = require('./routes/movie-reviews')
const addReview = require('./routes/addReview')
const deleteReview = require('./routes/deleteReview')
const editReview = require('./routes/editReview')
const review = require('./routes/review')
const searchReviews = require('./routes/searchReviews')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.redirect('/movie-reviews')
})
app.use('/movie-reviews', movieReviews)
app.use('/review', review)
app.use('/addReview', addReview)
app.use('/editReview', editReview)
app.use('/delete', deleteReview)
app.use('/searchReviews', searchReviews)
