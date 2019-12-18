const express = require('express')
const UserController = require('./controllers/UserController')
const TransactionController = require('./controllers/TransactionController')
const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/transactions', TransactionController.index)
routes.post('/users/:user_id/transactions', TransactionController.store)

module.exports = routes