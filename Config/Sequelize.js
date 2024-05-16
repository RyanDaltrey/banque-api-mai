//Pour se connecter a une base de donnee et pouvoir faire un lien a nos class

const Sequelize = require("sequelize");
const config = require('./config.json');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host : config.host,
    dialect : 'mysql',
    port : config.port
})

module.exports = sequelize;