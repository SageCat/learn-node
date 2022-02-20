const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("the server is on...");
        // res.send('ok');
        res.end()
    } else if (req.url === '/api') {
        res.write(JSON.stringify({name: 'sage', age: 20}))
        res.end();
    }
}).listen(8000)
// console.log(`the server is on http://localhost:30000`)

