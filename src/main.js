const superagent = require('superagent');
const fsl = require('./formatSearchList');
const response = require('./response/response');

let searchUrl = 'https://www.zhihu.com/api/v4/search_v3';

function search(resp, query) {
    console.log('query', query)
    superagent
    .get(searchUrl)
    .query(query)
    .set('accept','application/json')
    .set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36')
    .timeout(10000)
    .then(
        (res) => {
            /**
             * 解析数据
             */
            if (res && res.body && res.body.data && res.body.data.lenth > 0) {
                fsl.formartSearchList(res.body.data, resp);
            } else {
                response.noMoreData(resp);
            }
        }
    )
    .catch(
        (err) => {
            if (err.timeout) {
                response.timeOutRequest(resp);
            }
        }
    );
}

module.exports = {
    search: search
}