let http = require('http');
let fs = require('fs');
let path = require('path');

// let server = http.createServer();

// server.on('request', function(req, res) {
//     const src = fs.createReadStream(path.join(__dirname,'cat.webp'), { highWaterMark: 16 * 1024 });
//     src.pipe(res);
// });

// server.listen(3000);


http.createServer((req, res)=>{
    fs.readFile(path.join(__dirname, 'cat.webp'), (err, data)=>{
        if(err) throw err;
        res.end(data);
    })
}).listen(3000, ()=>console.log('listening on port 3000'));
