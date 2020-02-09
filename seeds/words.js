
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nouns').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
      {
        id: 1, 
        Italian: 'il ragazzo',
        plural_Italian: 'i ragazzi', 
        English: 'boy',
        plural_English: 'boys',
      }, 
      {
        id: 2, 
        Italian: 'la ragazza',
        plural_Italian: 'le ragazze', 
        English: 'girl',
        plural_English: 'girls',
      }, 
      {
        id: 3, 
        Italian: "l'anno",
        plural_Italian: "gli anni", 
        English: "year",
        plural_English: "years",
      }, 
      {
        id: 4, 
        Italian: 'il caffè',
        plural_Italian: 'caffè', 
        English: 'coffee',
        plural_English: 'coffee',
      } 

      ]);
    });
};
