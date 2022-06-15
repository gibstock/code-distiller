const express = require('express')
const router = express.Router();
const pool = require('../data/database').pool


router.get('/', (req, res) => {
  res.render('addReview', {movies: {}})
})

router.post('/', (req, res) => {
  let sql = `INSERT INTO movies SET ?`
  pool.query(sql, req.body, (err, result) => {
    if(err) throw err;
    console.log(result)
    res.write(`<h1>Insert Success</h1>
    <a href="/movie-reviews">Movies</a>
    `)
    res.end()
  })
})

module.exports = router