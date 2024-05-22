const Compte = require("../Models/Compte");


class CompteService {
    async getAllCompte(){
        return await Compte.findAll();
    }

    async getCompteByID(compteID){
        return await Compte.findByPk(compteID)
    }

    async addCompte(comptedata){
        return await Compte.create(comptedata);
    }

    async removeCompte(compteID){
        return await Compte.destroy({
            where : {CO_ID : compteID}
        })
    }

    async updateCompte(compteID, compte){
        return await Compte.update(compte , {
            where : {CO_ID : compteID},
            individualHooks : true
        })
    }
}
module.exports = new CompteService();