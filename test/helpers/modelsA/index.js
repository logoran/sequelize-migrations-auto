"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = new Sequelize('cart', 'leo', '123456', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',

    pool: {
        max: 30,
        min: 0,
        idle: 10000,
        acquire: 40000,
        handleDisconnects: true
    },

    retry: {
        match: [
            Sequelize.ConnectionError,
            Sequelize.ConnectionRefusedError,
            Sequelize.ConnectionResetError,
            Sequelize.ConnectionTimedOutError,
            Sequelize.OptimisticLockError,
            Sequelize.TimeoutError
        ],
        max: 3
    },

    define: {
        timestamps: false
    },

    timezone: '+08:00' //东八时区
});

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
