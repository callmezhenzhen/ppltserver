const superagent = require('superagent');
const cheerio = require('cheerio');
const fsl = require('./formatSearchList');

let searchUrl = 'https://www.zhihu.com/api/v4/search_v3';

function getResults() {
    superagent
    .get(searchUrl)
    .query({
        t: 'general',
        q: '体育',
        correction: 6,
        offset: 30,
        limit: 30,
        show_all_topics: 0,
        search_hash_id: '3e518350cd45a9acb1c4de20ddea69e6'
    })
    .set('content-type', 'application/*+json')
    .set('accept','application/*+json')
    .set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36')
    .then(
        (res) => {
            if (res) {
                fsl.formartSearchList(res.body.data);
            }
        }
    )
    .catch(
        (err) => {
            console.log(err)
        }
    );
}

getResults();