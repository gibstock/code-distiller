const express = require('express')
const router = express.Router();
const pool = require('../data/database').pool

router.get('/review/:slug', (req, res) => {
  console.log(req.params)
  // let sql = `SELECT * FROM movies WHERE slug = ?`
  let sql = `SELECT * FROM movies`

  pool.getConnection((err, connection) => {
    if(err) throw err;
    // connection.query(sql, req.params.slug, (err, result) => {
    connection.query(sql, (err, result) => {
      if(err) throw err;
      let postTime = new Date(result[0].createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"})
      let filteredMovie = result.filter((movie) => (
        movie.slug === req.params.slug
      ))
      res.render('review', {
        movies: result,
        movie: filteredMovie[0],
        posted: postTime
      })
    })
  })
})

module.exports = router