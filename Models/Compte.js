// Vient de la dependance
const {Model, DataTypes} = require ('sequelize');
//vient de notre fichier Sequelize.js
const sequelize = require ('../Config/Sequelize');
const Client = require('./Client');

class Compte extends Model{

}

Compte.init({
    CO_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CO_Type : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CO_Solde : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    CO_TauxInteret : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    CO_Decouvert_Auto : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    CO_DateOuverture : {
        type : DataTypes.DATE,
        allowNull : false
    },
    CO_Rib : {
        type : DataTypes.CHAR,
        length : 27,
        allowNull : true
    },
    FK_Client : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
},
    {
        sequelize,
        modelName : 'Compte',
        tableName: 'compte',
        timestamps: false
})

// Compte.hasMany(Client, {as : "clients", foreignKey : "FK_COMPTEBENEFICIAIRE"})

module.exports = Compte;