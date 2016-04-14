var Sequelize = require('sequelize');
var sequelize = new Sequelize('mariadb://abc123:abc456@localhost/sqlpractices');
var express = require('express');
var app = express();

var TaskModel = require('./models/Task.js');
var Task = TaskModel(sequelize);
var BoardModel = require('./models/Board.js');
var Board = BoardModel(sequelize);

Board.hasMany(Task);
Task.belongsTo(Board);

sequelize.sync({

});
