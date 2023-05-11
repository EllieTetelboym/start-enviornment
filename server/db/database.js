
// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const Sequelize = require('sequelize')
// const pkg = require('../../package.json')

// this is grabbing the database name form your package.json file
// const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}-test` : pkg.name
// console.log(`Opening database connection to ${dbName}`)

const db = new Sequelize(`postgres://localhost:5432/AnimeFigures`, {
    logging: false,
})

module.exports = db