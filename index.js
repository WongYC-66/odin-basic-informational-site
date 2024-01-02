const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const { getDefaultHighWaterMark } = require('node:stream');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {

    console.log(req.url)

    switch (req.url) {
        case "/":
            fs.readFile(
                path.join(__dirname, 'public', 'index.html'),
                (err, content) => {
                    if (err) throw err;
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(content);

                }
            )
            break;

        case "/about":
            fs.readFile(
                path.join(__dirname, 'public', 'about.html'),
                (err, content) => {
                    if (err) throw err;
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(content);

                }
            )
            break;

        case "/contact-me":
            fs.readFile(
                path.join(__dirname, 'public', 'contact-me.html'),
                (err, content) => {
                    if (err) throw err;
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(content);

                }
            )
            break;



        default:
            fs.readFile(
                path.join(__dirname, 'public', '404.html'),
                (err, content) => {
                    if (err) throw err;
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(content);
                }
            )

    }

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});