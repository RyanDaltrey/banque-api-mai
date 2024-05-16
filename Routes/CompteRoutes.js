const express = require ('express');
const CompteController = require('../Controllers/CompteController');
const router = express.Router();

router.get('/', (req, res) => CompteController.getAllCompte(req, res))
router.get('/:id', (request,result) => CompteController.getCompteByID(request, result));

module.exports = router;