
exports.up = function(knex) {
    return knex.schema.createTable("category_words", table => {
        table.increments(); 

        table.integer("category_id").references('id').inTable('categories').onDelete('CASCADE').onUpdate('CASCADE')

        table.integer('noun_id').references('id').inTable('nouns').onDelete('CASCADE').onUpdate('CASCADE')

        table.integer('verb_id').references('id').inTable('verbs').onDelete('CASCADE').onUpdate('CASCADE') 

        table.integer('adjective_id').references('id').inTable('adjectives').onDelete('CASCADE').onUpdate('CASCADE')
    })
    };
    
    exports.down = function(knex) {
    return knex.schema.dropTableIfExists('category_words');
    };
    