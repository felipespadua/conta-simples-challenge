const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        })
    } 
    static associate(models){
        this.hasMany(models.Transaction, { foreignKey: 'user_id', as: 'transactions' })
    }
}

module.exports = User;