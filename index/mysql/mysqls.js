var mysql = require('mysql');
var config = {
    user: 'root',
    password: 'root',
    database: '1609a'
}
var pool = mysql.createPool(config);

module.exports = function(sql, arr, ck) {
    ck = ck ? ck : arr;
    arr = arr || [];
    pool.getConnection(function(err, con) {
        if (err) {
            return ck(err)
        } else {
            con.query(sql, arr, function(err, result) {
                if (err) {
                    return ck(err)
                } else {
                    ck(null, result);
                    con.release();
                }
            })
        }
    })
}