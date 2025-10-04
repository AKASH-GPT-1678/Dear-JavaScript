const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello  assalam walikum fronm node js ')

});

const port = 3000;
server.listen(port, () => {
    console.log("Server is running on 30000")
})