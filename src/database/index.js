const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Transaction = require('../models/Transaction')

const connection = new Sequelize(dbConfig);

User.init(connection);
Transaction.init(connection);

Transaction.associate(connection.models)
User.associate(connection.models)

module.exports = connection