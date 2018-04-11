
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('build').del()
    .then(function() {
      // Inserts seed entries
      return knex('build').insert([
        {id: 1, colname1: `Fraz-Urb'luu`, colname2: `Tanar'ri`, colname3: 'Prince of Deception'},
        {id: 2, colname1: `Graz'zt`, colname2: `Tanar'ri`, colname3: 'The Dark Prince'},
        {id: 3, colname1: `Demogorgon`, colname2: 'Demon Lord', colname3: 'Prince of Demons'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('build_id_seq', (SELECT MAX(id) FROM build))")
      })
    })
}
