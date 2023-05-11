// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Character = require('./models/Character');
const Anime = require('./models/Anime')

// establish relations using magic methods
Anime.hasMany(Character);
Character.belongsTo(Anime);

module.exports = {
    // Include your models in this exports object as well!
    Character,
    Anime,
    db,
}