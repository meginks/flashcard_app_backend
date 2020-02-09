
exports.up = function(knex) {
return knex.schema.createTable("categories", table => {
    table.increments(); 
    table.string('category_name');
    table.string('category_description');

})
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('categories');
};
