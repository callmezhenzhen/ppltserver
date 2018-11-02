const util = require('../utils/util')

function setSearchQuery(query) {
    let hash = util.createHashId();

    return {
        q: query.key,
        offset: (query.pindex - 1) * 10 + 5,
        limit: 10,
        t: 'general',
        correction: 10,
        show_all_topics: 0,
        search_hash_id: hash
    }
}

function checkQuery(query, res) {
    if (!query || !query.key || !query.pindex) {
        return false
    }
    return true
}

function setTopAnswersQuery(query) {
    return {
        include: 'data[?(target.type=topic_sticky_module)].target.data[?(target.type=answer)].target.content,relationship.is_authorized,is_author,voting,is_thanked,is_nothelp;data[?(target.type=topic_sticky_module)].target.data[?(target.type=answer)].target.is_normal,comment_count,voteup_count,content,relevant_info,excerpt.author.badge[?(type=best_answerer)].topics;data[?(target.type=topic_sticky_module)].target.data[?(target.type=article)].target.content,voteup_count,comment_count,voting,author.badge[?(type=best_answerer)].topics;data[?(target.type=topic_sticky_module)].target.data[?(target.type=people)].target.answer_count,articles_count,gender,follower_count,is_followed,is_following,badge[?(type=best_answerer)].topics;data[?(target.type=answer)].target.annotation_detail,content,relationship.is_authorized,is_author,voting,is_thanked,is_nothelp;data[?(target.type=answer)].target.author.badge[?(type=best_answerer)].topics;data[?(target.type=article)].target.annotation_detail,content,author.badge[?(type=best_answerer)].topics;data[?(target.type=question)].target.annotation_detail,comment_count',
        offset: (query.pindex - 1) * 10,
        limit: 10
    }
}

function checkTopAnswersQuery(query) {
    if (!query || !query.pindex) {
        return false
    }
    return true
}

module.exports = {
    checkQuery: checkQuery,
    setSearchQuery: setSearchQuery,
    setTopAnswersQuery: setTopAnswersQuery,
    checkTopAnswersQuery: checkTopAnswersQuery
}
