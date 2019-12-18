const { Model, DataTypes } = require('sequelize')

class Transaction extends Model {
    static init(sequelize){
        super.init({
            amount: DataTypes.DOUBLE,
            type: DataTypes.STRING,
            from: DataTypes.STRING,
            date: DataTypes.DATE
        }, {
            sequelize
        })
    } 
    
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Transaction;