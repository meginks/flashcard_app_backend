
exports.up = function(knex) {
    return knex.schema.createTable('nouns', table => {
        table.increments(); // id
        table.string('Italian'); 
        table.string('plural_Italian');
        table.string('English'); 
        table.string('plural_English')
        table.string('image_url')
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('nouns');
};
