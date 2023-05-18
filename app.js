const express = require('express');
const app = express();

const departamentoRoute = require('./routes/departamentosRoute')

const dependentesRoute = require('./routes/dependentesRoute')

const funcionariosRoute = require('./routes/funcionariosRouter')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/departamentos',departamentoRoute)
app.use('/dependentes',dependentesRoute)
app.use('/funcionarios',funcionariosRoute)

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada.')
    erro.status = 404;
    next(erro)
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: { 
            mensage: error.message
        }
    })
})

module.exports =app
