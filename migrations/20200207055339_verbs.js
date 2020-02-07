
exports.up = function(knex) {
    return knex.schema.createTable('verbs', table => {
        table.increments(); // id
        table.string('Italian'); 
        table.string('English');
        table.string('image_url') 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('verbs');
};
