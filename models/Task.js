var Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('Task',{
    name: Sequelize.STRING,
    account: Sequelize.STRING,
    password: Sequelize.STRING,
  });
}
