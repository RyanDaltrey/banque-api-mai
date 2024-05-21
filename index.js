// console.log("Serveur lancé");

// const Client = require('./Models/Client');
// const Compte = require('./Models/Compte');
// const Transaction = require('./Models/Transaction');

// Client.findAll({include : 'comptes'}).then(clients =>{
//     // console.log(clients);
//     clients.map(client => {
//         console.log(client.toJSON());
//     })
// })

// Compte.findAll().then(comptes =>{
//     comptes.map(compte => {
//         console.log(compte.toJSON());
//     })
// })

// Transaction.findAll().then(transactions =>{
//     let transactionsData = transactions.map(transaction => transaction.get())
//         console.log(transactionsData);
//     })

const express = require('express');
const app = express();
const clientRoutes = require('./Routes/ClientRoutes')
const compteRoutes = require('./Routes/CompteRoutes')
const transactionRoutes = require('./Routes/TransactionRoutes')
const authenticateRoutes = require('./Routes/AuthenticateRoutes');
const AuthenticateControllers = require('./Controllers/AuthenticateControllers');



app.use(express.json());
// '/clients' se que l'utilisateur mets dans le url pour avoir les donnees clients
app.use('/clients',AuthenticateControllers.authenticateToken, clientRoutes)
app.use('/comptes',AuthenticateControllers.authenticateToken, compteRoutes)
app.use('/transactions',AuthenticateControllers.authenticateToken, transactionRoutes)
app.use('/auth', authenticateRoutes)

module.exports = app;

