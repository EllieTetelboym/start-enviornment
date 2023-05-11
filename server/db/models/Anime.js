const Sequelize = require('sequelize');
const db = require('../database');

const Anime = db.define('anime', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = Anime;