
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('words2').truncate()
    .then(function () {
      // DID NOT USE
      return knex('words2').insert([
        {
          ehn_word: "ae",
          ehn_pos: "adv.",
          ehn_ipa: "/ae/",
          eng_trans: "another"
        }
      ]);
    });
};
