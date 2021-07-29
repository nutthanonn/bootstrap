const http = require('http')
const fs = require('fs')


http.createServer(function (req, res){
    fs.readFile("summer.html", function(err, data){
        if(err) throw err
        res.writeHead(200, {'Content-Text' : 'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8080)