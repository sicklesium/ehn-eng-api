const db = require('../data/dbConfig')

module.exports = {
    getAll,
    getById
}

function getAll() {
    return db('words')
}

function getById(id) {
    return db('words')
        .where({ id })
        .first();
}