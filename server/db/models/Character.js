const Sequelize = require('sequelize');
const db = require('../database');

const Character = db.define('character', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    price:{
        type: Sequelize.DECIMAL,
        allowNull: false,
        unique: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
})

module.exports = Character;