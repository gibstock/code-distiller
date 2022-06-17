const express = require('express')
const mysql = require('mysql')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const fs = require('fs')
const https = require('https')
const http = require('http')
const PORT = 443



if(process.env.NODE_ENV === 'production') {
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/codedistiller.com/privkey.pem', 'utf8')
  const certificate = fs.readFileSync('/etc/letsencrypt/live/codedistiller.com/fullchain.pem', 'utf8')

  const credentials = {
        key: privateKey,
        cert: certificate
  };
  const httpsServer = https.createServer(credentials, app)
  httpsServer.listen(443, ()=> console.log(`listening on https://localhost:443`))
  console.log('prod')
}

if(process.env.NODE_ENV === 'development') {
  const httpServer = http.createServer(app)
  httpServer.listen(8080, ()=> console.log(`listening on http://localhost:8080`))
  console.log('dev')
}

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
app.use('/', review)
app.use('/addReview', addReview)
app.use('/editReview', editReview)
app.use('/delete', deleteReview)
app.use('/searchReviews', searchReviews)
