'use strict'

const sequelize = require("../db/db")

const { Model, DataTypes } = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Departamentos extends Model { }

    Departamentos.init({

        nome: DataTypes.STRING(50),
        sigla: DataTypes.STRING(5),
        responsavel: DataTypes.STRING(50)

    },
    {
        sequelize,
        modelName:'departamentos',
        timestamps: false
    })
    return Departamentos
}