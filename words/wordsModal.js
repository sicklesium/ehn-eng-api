const db = require('../data/dbConfig')

module.exports = {
    getAll,
    getById
}

function getAll() {
    return db('words2')
}

function getById(id) {
    return db('words2')
        .where({ id })
        .first();
}