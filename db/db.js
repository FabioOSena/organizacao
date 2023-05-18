const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('organização','root','root',{
    host: 'localhost',
    dialect:'mysql'
})
sequelize.authenticate()
.then(function(){
    console.log('conecxão realizada com sucesso!')
})
.catch(function(){
    console.log('ERRO: não foi possivel realizar a conexão')
})
module.exports = sequelize;