const http = require('http')
const fs = require('fs')


http.createServer((rej, res) =>{
    fs.readFile('index.html', (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-text' : 'text/html'})
            return res.end('404 Not found')
        }
        res.writeHead(200, {'Content-Text' : 'text/html'})
        return res.end()
    })
}).listen(8080)