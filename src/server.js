const http = require('http');
const url = require('url');
const response = require('./response/response');
const search = require('./core/search');

function createServer() {
    let port = 10349;
    let host = '127.0.0.1';

    let server = http.createServer(function (req, res) {
        let urlObj = url.parse(req.url, true);
        let pathName = urlObj.pathname;
        let query = urlObj.query;

        if (pathName == '/topAnswers') {
            response.setHeader(res);
            search.topAnswers(query, res);
        } else {
            res.end();
        }
    });

    server.listen(port, host, function () {
        console.log('server is running in http://' + host + ':' + port);
    });
}

createServer();