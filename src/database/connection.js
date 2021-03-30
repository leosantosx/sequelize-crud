const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('users', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
})

sequelize.sync().then(function () {
    console.log('Connection has been established successfully.');  
}).catch (function (error){
    console.log('Unable to connect to the database', error);
});

module.exports = sequelize