const express = require ('express');
const TransactionController = require('../Controllers/TransactionController');
const ClientController = require('../Controllers/ClientController');
const router = express.Router();

router.get('/',(req, res) => TransactionController.getAllTransaction(req, res))
router.get('/:id', (request, result) => TransactionController.getAllTransactionbyID(request,result));
module.exports = router;

