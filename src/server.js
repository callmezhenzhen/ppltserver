const http = require('http');
const url = require('url');
const querystring = require('querystring');
const main = require('./main');

function createServer() {
    let port = 10349;
    let host = '127.0.0.1';

    let server = http.createServer(function (req, res) {
        let arg = url.parse(req.url, true).query;

        if (req.url !== '/favicon.ico') {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            /**
             * 查询
             */
            main.search(res);
        }
    });

    server.listen(port, host, function () {
        console.log('server is running in http://' + host + ':' + port);
    });
}

createServer();