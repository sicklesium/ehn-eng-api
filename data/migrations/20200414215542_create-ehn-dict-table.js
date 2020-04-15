
exports.up = function (knex) {
    return knex.schema.createTable('words', tbl => {
        tbl.increments();
        tbl.text('ehn_word')
            .notNullable();
        tbl.text('ehn_pos')
            .notNullable();
        tbl.text('ehn_ipa')
        tbl.text('eng_trans')
            .notNullable();
        tbl.text('example')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('words');
};
