const express = require('express')
const { login } = require('./controladores/login')
const { cadastrar, listar } = require('./controladores/usuario')
const { validarAutenticacao } = require('./intermediarios/autenticacao')

const rotas = express()

// rotas -> controlador
rotas.post('/usuario', cadastrar)
rotas.post('/login', login)

rotas.use(validarAutenticacao)

// rotas -> intermediario -> controlador
rotas.get('/usuario', listar)

module.exports = rotas