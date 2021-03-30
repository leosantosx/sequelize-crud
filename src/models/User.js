const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/connection')

class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    }
},{
    sequelize,
    modelName: 'sequelize-test',
})

module.exports = User;
