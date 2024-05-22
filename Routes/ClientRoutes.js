const express = require ('express');
const ClientController = require('../Controllers/ClientController');
const router = express.Router();

// '/' est la route specifiquement pour l'utilisateur
router.get('/', (req,res) => ClientController.getAllClient(req,res))
router.get('/:id', (request, result) => ClientController.getClientByID(request,result));
router.post('/', (request, result) => ClientController.addClient(request, result));
router.delete('/:id', (request, result) => ClientController.removeClient(request, result));
router.patch('/:id', (request, result) => ClientController.updateClient(request, result));

module.exports = router;