const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        // Read HTML file - Browser knows it is HTML code
        res.setHeader('Content-Type', 'text/html');

        // Write some data to the response
        res.write('<html>');
        res.write('<head><title>Test 01</title></head>');
            res.write('<body>');
                res.write('<p>Fill Up The Form</p>')
                res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
            res.write('</body>')
        res.write('</html>');
        res.end();
    }

    if (url === '/users') {
        // Read HTML file - The browere will knows it is in HTML concept
        res.setHeader('Content-Type', 'text/html');

        // Write some data to the response
        res.write('<html>');
        res.write('<head><title>Test 01</title></head>');
            res.write('<body>');
                res.write('<ul><li>User1</li><li>User2</li></ul>')
            res.write('</body>')
        res.write('</html>');
        res.end();
    }

    // Send a HTML response with some "Page not found text
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
        body.push(chunk);
        });
        req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
        });
        // Response code: 302 used Found. This mean that the URL of req resp changes temporarily
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    
});

server.listen(3000);