const express = require ('express');
const AuthenticateControllers = require('../Controllers/AuthenticateControllers');
const router = express.Router();

router.post('/login' , (request, result) => AuthenticateControllers.login(request, result));

router.post('/register',(request, result) => AuthenticateControllers.register(request, result));

module.exports = router;