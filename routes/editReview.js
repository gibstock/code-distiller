const express = require('express')
const router = express.Router();
const pool = require('../data/database').pool

// router.get('/', (req, res) => {
//   let sql = `SELECT * FROM movies WHERE id = ?`

//   pool.getConnection((err, connection) => {
//     if(err) throw err;

//     connection.query(sql, req.query.id, (err, result) => {
//       connection.release()
//       if(err) throw err;
//       res.render('addReview', {movies: result[0]})
//     })
//   })
// })

// router.post('/', (req, res) => {
//   let param = [
//     req.body,
//     req.query.id
//   ]
//   let sql = `UPDATE movies SET ? WHERE id = ?`

//   pool.getConnection((err, connection) => {
//     if(err) throw err;

//     connection.query(sql, param, (err, result) => {
//       connection.release()
//       if(err) throw err;
//       res.redirect('/movie-reviews')
//     })
//   })
// })

module.exports = router