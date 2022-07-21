const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const options = {
  dialec: 'postgres',
  logging: config.isProd ? false : true
}

if (config.isProd) {
  options.dialecOptions = {
    ssl: {
      rejectUnauthorized: false      
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
