// 1 - Import Node.js core module
const http = require('http'); 
const PORT = 5001

// 2 - creating server
const server = http.createServer(function (requests, response) {   
    response.statusCode = 204
    response.setHeader('Content-Type', 'application/text-plain')
    response.end('Hola, Chicas!')
});

 //3 - listen for any incoming requests
server.listen(PORT, () => console.log(`Node.js web server at port ${PORT} is running..`));
