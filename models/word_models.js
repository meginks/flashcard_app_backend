const db = require('./dbConfig.js'); 

module.exports = {
    add, 
    findAll,
    findById,
    update,
    remove
}

// each of these functions is able to be used for any of the flashcard / dictionary entries and for the verb conjugations. The only thing needed is the correct table name.

// add 
function add(entry, tableName) {
    const [id] = await db(tableName)
    .insert(entry).returning('id') // this guarantees that it will work with postgres for Heroku
    return findById(tableName, id)
}

// update 
function update(changes, id, tableName) {
    return db(tableName)
    .where('id', id)
    .update(changes);
}

// remove 
function remove(tableName, id) {
    return db(tableName)
    .where({id})
    .del()
}

// findById 

function findById(tableName, id) {
    return db(tableName)
    .where({
    id
    })
    .first();
}

// findAll 
function findAll(tableName) {
    return db(tableName)
}
