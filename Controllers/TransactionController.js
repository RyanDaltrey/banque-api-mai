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
}
module.exports = new TransactionController();