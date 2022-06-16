const express = require('express')
const router = express.Router();
const pool = require('../data/database').pool

router.get('/', (req, res) => {
  let sql = `DELETE FROM movies WHERE id = ?`

  pool.getConnection((err, connection) => {
    if(err) throw err;

    connection.query(sql, req.query.id, (err, result) => {
      connection.release()
      if(err) throw err;
      res.redirect('/movie-reviews')
    })
  })
})

module.exports = router