const Client = require("../Models/Client");

class ClientService {

    async getAllClient(){
        return await Client.findAll({include : "comptes"});
    }

    async getClientByID(clientID){
        return await Client.findByPk(clientID)
    }
}
module.exports = new ClientService();
//On mets nous pour retourner un objet client qui sera disponible desuite