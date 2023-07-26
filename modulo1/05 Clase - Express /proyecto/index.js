const http = require('http'); // Import Node.js core module
const PORT = 5000;
const server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request     home
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Pagina Home.</p></body></html>');
        res.end("Hola mundo ");
    }
    else if (req.url == "/estudiantes") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Pagina para estudiantes.</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Es la Pagina del Admin.</p></body></html>');
        res.end();
    } else if (req.url == '/data') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hi Barbie!"}));  
        res.end();  
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/text-plain')
        res.end('Invalid Request!');
    }
});

server.listen(PORT, () => console.log(`Node.js web server at port ${PORT} is running..`));