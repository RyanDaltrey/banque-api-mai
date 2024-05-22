const ClientService = require("../Services/ClientService");

class ClientController {

    async getAllClient(request, result){
        try {
            const clients = await ClientService.getAllClient();
            result.json(clients)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la recuperation des clients"})
        }
    }

    async getClientByID(request, result){
        try {
            const client = await ClientService.getClientByID(request.params.id);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la recuperation du client"})
        }
    }

    async addClient(request, result){
        try {
            const client = await ClientService.addClient(request.body);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'insersection du client"})
        }
    }

    async removeClient (request, result){
        try {
            await ClientService.removeClient(request.params.id); //l'id du client qui veut supprimer sera dans l'url donc on a besoin d'un params 
            result.json({message : "Le client a bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la supression du client"})
        }
    }

    async updateClient (request, result){
        try {
            const client = await ClientService.updateClient(request.params.id , request.body);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification du client"})
        }
    }

}
module.exports = new ClientController();

// Si on fait une fonction qui sert a renvoyer une donné on fait une const sinon, comme remove client on fait pas de const.