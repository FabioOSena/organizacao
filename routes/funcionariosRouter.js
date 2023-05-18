const express = require('express');
const router = express.Router();

const funcionariosController = require('../controllers/funcionarios')

router.get('/', (req, res) =>{
    funcionariosController.getAll(req,res)
})

router.get('/:id',(req,res)=>{
    funcionariosController.get(req,res)
})

router.post('/', (req,res)=> {
    funcionariosController.create(req,res)
});

router.put('/:id', (req, res)=>{
    funcionariosController.update(req,res)
})

router.delete('/:id', (req,res)=> {
    funcionariosController.delete(req,res)
})


module.exports = router