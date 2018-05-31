const config = require('../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.TABLE, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    logging: false,
    operatorsAliases: false
});

sequelize.sync({ force: true });

let op = Sequelize.Op;
let model = {};

model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;

/*
    Models
*/
model.users = require('../models/User')(sequelize, Sequelize);

module.exports = model;