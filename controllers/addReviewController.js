const pool = require('../data/database').pool

exports.renderReviewPage = (req, res) => {
  res.render('addReview', {movies: {}})
}

exports.insertReview = (req, res) => {
  let sql = `INSERT INTO movies SET ?`
  pool.query(sql, req.body, (err, result) => {
    if(err) throw err;
    console.log(result)
    res.write(`<h1>Insert Success</h1>
    <a href="/movie-reviews">Movies</a>
    `)
    res.end()
  })
}