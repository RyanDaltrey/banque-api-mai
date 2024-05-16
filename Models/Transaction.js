const {Model, DataTypes} = require ('sequelize');

const sequelize = require ('../Config/Sequelize');
const Compte = require('./Compte');


class Transaction extends Model{

}

Transaction.init({
    TR_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TR_Type : {
        type : DataTypes.STRING,
        lenght : 50,
        allowNull : false
    },
    TR_Ponctuel : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    },
    TR_Date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    FK_CompteDebiteur : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references: {
            model: "Compte",
            key: "CO_ID"
        }
    },
    FK_CompteBeneficiaire : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references: {
            model: "Compte",
            key: "CO_ID"
        }
    },
},{
    sequelize,
    modelName : 'Transaction',
    tableName: 'transaction',
    timestamps: false

})

Transaction.belongsTo(Compte, {as : "compteDebiteur" , foreignKey :'FK_CompteDebiteur'})
Transaction.belongsTo(Compte, {as : "compteBeneficiaire" , foreignKey :'FK_CompteBeneficiaire'})

module.exports = Transaction;

