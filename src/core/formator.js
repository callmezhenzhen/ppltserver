const response = require('../response/response');

function formartByKeyWords(list) {
    
    let array = [];

    list.forEach(
        (item) => {
            array.push({
                title: (item.highlight || {}).title || '',
                description: (item.highlight || {}).description || '',
                voteCount: (item.object || {}).voteup_count || 0,
                commentCount: (item.object || {}).comment_count || 0
            }); 
        }
    );
}

/**
 * 
 * @param {*} list 
 * 包装结果
 */
function formartTopAnswers(list) {
    let array = [];

    list.forEach(
        (item) => {
            let target = item.target || {};
            let question = target.question || {};
            let author = target.author || {};
            let linkUrl = 'https://www.zhihu.com/question/' + question.id +'/answer/' + target.id;

            array.push({
                title: question.title || '',
                excerpt: (target.excerpt || '').replace(/<b>/g, '').replace(/<\/b>/,''),
                voteup_count: target.voteup_count || 0,
                comment_count: target.comment_count || 0,
                linkUrl: linkUrl,
                answer_id: target.id,
                author_name: author.name
            });
        }
    );

    return {
        code: 1,
        list: array
    }
}

module.exports = {
    formartTopAnswers: formartTopAnswers
}