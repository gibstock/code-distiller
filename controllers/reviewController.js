const pool = require('../data/database').pool
const marked = require('marked')

exports.getReview = (req, res) => {
  let sql = `SELECT * FROM movies`

  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(sql, (err, result) => {
      connection.release();
      if(err) throw err;
      let postTime = new Date(result[0].createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"})
      let filteredMovie = result.filter((movie) => (
        movie.slug === req.params.slug
      ))
      let unmarked = filteredMovie[0].content
      res.render('review', {
        movies: result,
        movie: filteredMovie[0],
        content: marked.parse(unmarked),
        posted: postTime
      })
    })
  })
}