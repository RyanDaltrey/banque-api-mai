const express = require ('express');
const CompteController = require('../Controllers/CompteController');
const router = express.Router();

router.get('/', (req, res) => CompteController.getAllCompte(req, res))

module.exports = router;