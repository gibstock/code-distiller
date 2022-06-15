const express = require('express')
const router = express.Router();
const pool = require('../data/database').pool

router.get('/review/:slug', (req, res) => {
  console.log(req.params)
  let sql = `SELECT * FROM movies WHERE slug = ?`

  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(sql, req.params.slug, (err, result) => {
      if(err) throw err;
      let postTime = new Date(result[0].createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"})
      console.log(result)
      res.render('review', {
        movie: result[0],
        posted: postTime
      })
    })
  })
})

module.exports = router