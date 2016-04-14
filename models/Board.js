var Sequelize = require('sequelize');

module.exports = function (sequelize){
  return sequelize.define('Board',{
    name: Sequelize.STRING,
    project: Sequelize.STRING,
    ssn: Sequelize.INTEGER,
  });
}
