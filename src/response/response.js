function setHeader(resp) {
    resp.writeHead(200, {
        'Content-Type': 'application/json'
    });
}

function badRequest(code, resp) {
    let obj;

    code = Number(code);
    switch (code) {
        case 0:
            obj = {
                code: 0,
                msg: '无效请求'
            };
            break
        case 1:
            obj = {
                code: 0,
                msg: '请求超时'
            };
            break
        case 2: 
            obj = {
                code: 0,
                msg: '未知异常'
            };
        case 3:
            obj = {
                code: 0,
                msg: '没有更多数据了'
            };
        default:
            obj = {
                code: 0,
                msg: '没有更多数据了'
            };
    }

    resp.end(JSON.stringify(obj));
}




module.exports = {
    setHeader: setHeader,
    badRequest: badRequest
};