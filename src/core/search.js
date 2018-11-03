const superagent = require('superagent');
const response = require('../response/response');
const request = require('../request/request');
const formator = require('./formator');

/**
 * 查询高票回答
 */
function topAnswers(query, resp) {
    /**
     * 请求路径
     */
    let searchUrl = 'https://www.zhihu.com/api/v4/topics/19776749/feeds/essence';

    /**
     * 检测请求
     */
    let bool = request.checkTopAnswersQuery(query);
    if (!bool) {
        response.badRequest(0, resp);
    }

    /**
     * 处理请求参数
     */
    let data = {};
    data.query = request.setTopAnswersQuery(query, resp);
    data.searchUrl = searchUrl;

    search(resp, data, (res) => {
        if (res && res.body && res.body.data && res.body.data.length > 0) {
            let result = formator.formartTopAnswers((res.body.data));

            resp.end(JSON.stringify(result));
        } else {
            response.badRequest(0, resp);
        }
    });
}


/**
 * 查询主方法
 */
function search(resp, data, callback) {
    superagent
    .get(data.searchUrl)
    .query(data.query)
    .set('accept','application/json')
    .set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36')
    .timeout(10000)
    .then(
        (res) => {
            callback && callback(res)
        }
    )
    .catch(
        (err) => {
            if (err.timeout) {
                response.badRequest(1, resp);
            } else {
                response.badRequest(2, resp);
            }
        }
    );
}

module.exports = {
    topAnswers: topAnswers
}