const mysql = require('mysql')



function connection(username, pass, dbName){
    var con = mysql.createConnection({
      host: "localhost",
      user: username,
      password: pass,
      database: dbName
    });
    
    this.query = function query(query, listener){
        con.connect((err) => {
            if (err){
                listener(err, null)
            }else
                con.query(query, (err2, rows) => {
                    if(err2)
                        listener(err2, null)
                    else
                        listener(null, rows)
                })
        })
    }
    
    return this;
}



module.exports = connection