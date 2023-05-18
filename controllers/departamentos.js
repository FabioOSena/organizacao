const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Departamentos = require('../models/departamentos');
const { get } = require('../app');
module.exports = {
    async getAll(req,res){
        const departamentos = await Departamentos (sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(departamentos)
    },
     async create(req,res){
        const departamentos = await Departamentos(sequelize,Sequelize.DataTypes).create({
            nome: req.body.nome,
            sigla: req.body.sigla,
            responsavel: req.body.responsavel
        })
        res.status(201).send({
            message: "Departamento cadastrado com sucesso."
        })
     },
     async update(req,res){
        const departamentos = await Departamentos(sequelize.DataTypes).update({
            nome: req.body.nome,
            sigla: req.body.sigla,
            responsavel: req.body.responsavel
        },
        {
            where:{ id: req.params.id}
        }
        );
        res.status(200).send({
            message: ('departamento atualizado com sucesso.')
        })
     }
}