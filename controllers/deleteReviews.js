const pool = require('../data/database').pool

exports.delete = (req, res) => {
  let sql = `DELETE FROM movies WHERE id = ?`

  pool.getConnection((err, connection) => {
    if(err) throw err;

    connection.query(sql, req.query.id, (err, result) => {
      connection.release()
      if(err) throw err;
      res.redirect('/movie-reviews')
    })
  })
}