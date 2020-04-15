
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('words').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        {
          ehn_word: "ae",
          ehn_ipa: "/ae/",
          eng_trans: "another"
        }
      ]);
    });
};
