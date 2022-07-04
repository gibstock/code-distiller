const pool = require('../data/database').pool

exports.getMovies = (req, res) => {
  let sql = `SELECT * FROM movies ORDER BY createdAt DESC`

  pool.getConnection((err, connection) => {
    if(err) throw err;

    connection.query(sql, (err, result) => {
      connection.release();
      if(err) throw err;
      let postTime = new Date(result[0].createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"})
      res.render('movie-reviews', {
        movies: result,
        posted: postTime
      })
    })
  })
}