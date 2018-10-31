const http = require('http');
const url = require('url');
const querystring = require('querystring')

function createServer() {
    let port = 10349;
    let host = '127.0.0.1';

    let server = http.createServer(function(req, res) {
        let arg = url.parse(req.url, true).query;

        if (req.url !== '/favicon.ico') {
            console.log(arg)

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                code: 1,
                msg: 'success'
            }));
        }
    });

    server.listen(port, host, function() {
        console.log('server is running in http://' + host + ':' + port);
    });
}

createServer();