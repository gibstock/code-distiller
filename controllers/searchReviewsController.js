const pool = require('../data/database').pool

exports.search = (req, res) => {
  let search = req.body.searchbox
  let sql = `SELECT * FROM movies`

  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(sql, (err, result) => {
      connection.release();
      if(err) throw err;
      let postTime = new Date(result[0].createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"})
      let filteredMovie = result.filter((movie) => (
        movie.title.toUpperCase().includes(search.toUpperCase().trim())
      ))
      if(filteredMovie.length >= 1) {
        res.render('review', {
          movies: result,
          movie: filteredMovie[0],
          posted: postTime
        })
      } else {
        res.render('emptySearchResults')
      }
    })
  })
}