function formartSearchList(list) {
    if (list && list.length > 0) {
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

        console.log(array)
    }
}

module.exports = {
    formartSearchList: formartSearchList
}