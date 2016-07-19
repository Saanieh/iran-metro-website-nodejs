const fs = require('fs');


function render(res, err){
    
    console.log('4');
    if (err)
        res.render('contact-us', {err: err});
    else
        res.render('index', {msg: 'comment-sent'});
}

function post(req, res){
    console.log('1');
    
    var error = null;
    
    var name = req.body.name;
    var email = req.body.email;
    var comment = req.body.comment; 
    
    console.log(name);
    
    fs.readFile(__dirname + '/../db-config.json','utf-8',(err, data) => {
    console.log('2');
        if(err){
            error = "config read failed";
            console.log(err);
            render(res, error);
            return;
        }
        
        var dbConfig = JSON.parse(data);
        const conn = require('../core/mysql-connection')(dbConfig.username, dbConfig.password, dbConfig.dbName);

        conn.query("insert into comments values ('" + name + "', '" + email + "', '" + comment + "');", (err2, rows) => {
            console.log('3');
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