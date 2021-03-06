exports.up = function(knex, Promise) {
  return knex.schema.createTable('build', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('colname1', 255).notNullable().defaultTo('a')
    table.string('colname2', 255).notNullable().defaultTo('b')
    table.string('colname3', 255).notNullable().defaultTo('c')
    table.timestamps(true, true)
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('build')
}
