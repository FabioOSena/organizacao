const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Dependentes = require('../models/dependentes');
const { get } = require('../app');
module.exports = {
    async getAll(req,res){
        const dependentes = await Dependentes (sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(dependentes)
    },
     async create(req,res){
        const dependentes = await Dependentes(sequelize,Sequelize.DataTypes).create({
            nome: req.body.nome,
            idade: req.body.idade,
            tipo: req.body.tipo,
            status_dep: req.body.status_dep,
            id_funcionarios:req.body.id_funcionarios
        })
        res.status(201).send({
            message: "Dependente cadastrado com sucesso."
        })
     },
     async update(req,res){
        const departamentos = await Departamentos(sequelize.DataTypes).update({
            nome: req.body.nome,
            idade: req.body.idade,
            tipo: req.body.tipo,
            status_dep: req.body.status_dep,
            id_funcionarios:req.body.id_funcionarios
        },
        {
            where:{ id: req.params.id}
        }
        );
        res.status(200).send({
            message: ('dependente atualizado com sucesso.')
        })
     }
}