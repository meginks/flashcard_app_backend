
exports.up = function(knex) {
    return knex.schema.createTable('conjugations', table => {

        table.increments();

        table.integer('verb_id').references('id').inTable('verbs').onDelete('CASCADE').onUpdate('CASCADE');
    
        // Presente
        table.string("presente_io");
        table.string("presente_tu"); 
        table.string("presente_lui_lei"); 
        table.string("presente_noi"); 
        table.string("presente_voi"); 
        table.string("presente_loro"); 
        
        // Imperfetto
        table.string("imperfetto_io");
        table.string("imperfetto_tu"); 
        table.string("imperfetto_lui_lei"); 
        table.string("imperfetto_noi"); 
        table.string("imperfetto_voi"); 
        table.string("imperfetto_loro");  

        // Passato Remoto
        table.string("passato_remoto_io");
        table.string("passato_remoto_tu"); 
        table.string("passato_remoto_lui_lei"); 
        table.string("passato_remoto_noi"); 
        table.string("passato_remoto_voi"); 
        table.string("passato_remoto_loro");  

        // Futuro Semplice 
        table.string("futuro_semplice_io");
        table.string("futuro_semplice_tu"); 
        table.string("futuro_semplice_lui_lei"); 
        table.string("futuro_semplice_noi"); 
        table.string("futuro_semplice_voi"); 
        table.string("futuro_semplice_loro");  

        // Passato Prossimo 
        table.string("passato_prossimo_io");
        table.string("passato_prossimo_tu"); 
        table.string("passato_prossimo_lui_lei"); 
        table.string("passato_prossimo_noi"); 
        table.string("passato_prossimo_voi"); 
        table.string("passato_prossimo_loro"); 
        
        // Trapassato Prossimo 
        table.string("trapassato_prossimo_io");
        table.string("trapassato_prossimo_tu"); 
        table.string("trapassato_prossimo_lui_lei"); 
        table.string("trapassato_prossimo_noi"); 
        table.string("trapassato_prossimo_voi"); 
        table.string("trapassato_prossimo_loro");  

        // Trapassato Remoto 
        table.string("trapassato_remoto_io");
        table.string("trapassato_remoto_tu"); 
        table.string("trapassato_remoto_lui_lei"); 
        table.string("trapassato_remoto_noi"); 
        table.string("trapassato_remoto_voi"); 
        table.string("trapassato_remoto_loro");  

        // Futuro Anteriore 
        table.string("futuro_anteriore_io");
        table.string("futuro_anteriore_tu"); 
        table.string("futuro_anteriore_lui_lei"); 
        table.string("futuro_anteriore_noi"); 
        table.string("futuro_anteriore_voi"); 
        table.string("futuro_anteriore_loro");  

        // Congiuntivo Presente
        table.string("congiuntivo_presente_io");
        table.string("congiuntivo_presente_tu"); 
        table.string("congiuntivo_presente_lui_lei"); 
        table.string("congiuntivo_presente_noi"); 
        table.string("congiuntivo_presente_voi"); 
        table.string("congiuntivo_presente_loro"); 
        
        // Congiuntivo Passato
        table.string("congiuntivo_passato_io");
        table.string("congiuntivo_passato_tu"); 
        table.string("congiuntivo_passato_lui_lei"); 
        table.string("congiuntivo_passato_noi"); 
        table.string("congiuntivo_passato_voi"); 
        table.string("congiuntivo_passato_loro"); 

        // Congiuntivo Imperfetto
        table.string("congiuntivo_imperfetto_io");
        table.string("congiuntivo_imperfetto_tu"); 
        table.string("congiuntivo_imperfetto_lui_lei"); 
        table.string("congiuntivo_imperfetto_noi"); 
        table.string("congiuntivo_imperfetto_voi"); 
        table.string("congiuntivo_imperfetto_loro"); 

        // Congiuntivo Trapassato
        table.string("congiuntivo_trapassato_io");
        table.string("congiuntivo_trapassato_tu"); 
        table.string("congiuntivo_trapassato_lui_lei"); 
        table.string("congiuntivo_trapassato_noi"); 
        table.string("congiuntivo_trapassato_voi"); 
        table.string("congiuntivo_trapassato_loro"); 

        // Condizionale Presente
        table.string("condizionale_presente_io");
        table.string("condizionale_presente_tu"); 
        table.string("condizionale_presente_lui_lei"); 
        table.string("condizionale_presente_noi"); 
        table.string("condizionale_presente_voi"); 
        table.string("condizionale_presente_loro"); 

         // Condizionale Passato
        table.string("condizionale_passato_io");
        table.string("condizionale_passato_tu"); 
        table.string("condizionale_passato_lui_lei"); 
        table.string("condizionale_passato_noi"); 
        table.string("condizionale_passato_voi"); 
        table.string("condizionale_passato_loro"); 

        // Imperativo 
        table.string("imperativo_io");
        table.string("imperativo_tu"); 
        table.string("imperativo_lui_lei"); 
        table.string("imperativo_noi"); 
        table.string("imperativo_voi"); 
        table.string("imperativo_loro"); 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('conjugations');
};
