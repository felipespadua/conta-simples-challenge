const Transaction = require('../models/Transaction')
const User = require('../models/User')
module.exports = {
    async index(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'transactions' }
        })

        return res.json(user.transactions)
    },

    async store(req, res) {
        const { user_id } = req.params
        const { amount, type, from, date } = req.body;

        const user = await User.findByPk(user_id)

        if(!user){
            return res.status(400).json({ error: 'User not found' })
        }

        const transaction = await Transaction.create({ 
            amount,
            type,
            from,
            date,
            user_id
        });

        return res.json(transaction)
    }
}