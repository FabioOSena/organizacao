const express = require('express');
const router = express.Router();

const departamentosController = require('../controllers/departamentos')

router.get('/', (req, res) =>{
    departamentosController.getAll(req,res)
})

router.get('/:id',(req,res)=>{
    departamentosController.get(req,res)
})

router.post('/', (req,res)=> {
    departamentosController.create(req,res)
});

router.put('/:id', (req, res)=>{
    departamentosController.update(req,res)
})

router.delete('/:id', (req,res)=> {
    departamentosController.delete(req,res)
})

module.exports = router