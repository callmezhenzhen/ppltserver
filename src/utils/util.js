function createHashId () {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];
    let temp = [];
    
    for (let i = 0; i < 32; i++) {
        if (temp.length >= 32) {
            break
        }
        temp.push(list[Math.floor(Math.random() * 16)]);
    }

    return temp.join('')
}

module.exports = {
    createHashId: createHashId
}