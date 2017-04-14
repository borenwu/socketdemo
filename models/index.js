/**
 * Created by Administrator on 2017/4/13.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const dbconfig = require('../config/dbconfig')

//db connect
const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    host: dbconfig.host,
    port: dbconfig.port,
    dialect: 'mysql',
  }
)

const db = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    const model = sequelize.import(path.join(__dirname, file));
    console.log(model)
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
