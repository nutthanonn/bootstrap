const http = require('http')
const fs = require('fs')


http.createServer(function(req, res){
    fs.readFile('summer.html', function(err, data){
        if(err){
            res.writeHead(404, {'Content-Text' : 'text/html'})
            return res.end()
        }
        res.writeHead(200, {'Content-Text' : 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)