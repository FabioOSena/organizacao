'use strict'

const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize , DataTypes) =>{

    class Funcionarios extends Model { }
    Funcionarios.init({
        nome: DataTypes.STRING(50),
        endereco: DataTypes.STRING(50),
        telefone: DataTypes.BIGINT,
        cargo: DataTypes.STRING(20),
        salario: DataTypes.DECIMAL(6,2),
        id_departamentos: DataTypes.SMALLINT
    },
    {
        sequelize,
        modelName: 'funcionarios',
        timestamps: false
    });
    return Funcionarios
}