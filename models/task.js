/**
 * Created by Administrator on 2017/4/14.
 */
/**
 * Created by Administrator on 2017/4/13.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
        name: DataTypes.STRING,
        finish:DataTypes.BOOLEAN
    });

    return Task;
};
