const TransactionService = require('../Services/TransactionService');

class TransactionController{

    async getAllTransaction(request, result){
        try {
            const transactions = await TransactionService.getAllTransaction();
            result.json(transactions)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la recuperation des transactions."})
            
        }
    }

    async getAllTransactionbyID(request, result){
        try {
            const transaction = await TransactionService.getTransactionByID(request.params.id);
            result.json(transaction);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la recuperation du transaction."})
        }
    }

    async addTransaction(request, result) {
        try {
            const transaction = await TransactionService.addTransaction(request.body);
            result.json(transaction);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la transaction."})
        }
    }

    async removeTransaction(request, result){
        try {
            await TransactionService.removeTransaction(request.params.id);
            result.json({message : "La Transaction a bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la supression du transaction"})
        }
    }

    async updateTransaction(request, result){
        try {
            const transaction = await TransactionService.updateTransaction(request.params.id , request.body);
            result.json(transaction);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de la transaction"})
        }
    }
}
module.exports = new TransactionController();