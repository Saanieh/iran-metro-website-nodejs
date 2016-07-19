const fs = require('fs');


function render(res, err){
    if (err){
        res.cookie('err', err);
        res.redirect('/contact-us');
    } else{
        res.cookie('msg', 'comment-sent');
        res.redirect('/');
    }
}

function post(req, res){
    
    var error = null;
    
    var name = req.body.name;
    var email = req.body.email;
    var comment = req.body.comment;
    
    fs.readFile(__dirname + '/../db-config.json','utf-8',(err, data) => {
        if(err){
            error = "config read failed";
            render(res, error);
            return;
        }
        
        var dbConfig = JSON.parse(data);
        const conn = require('../core/mysql-connection')(dbConfig.username, dbConfig.password, dbConfig.dbName);

        conn.query("insert into comments values ('" + name + "', '" + email + "', '" + comment + "');", (err2, rows) => {
            console.log(err2);
            if(err2){
                error = "db connection failed";
                render(res, error);
                return;
            }
            
            render(res, error)
        });
    });
}



module.exports = {
    post: post
}