const jwt = require('jsonwebtoken')
const chaveSecreta = require('../chaveSecreta')

const validarAutenticacao = (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (!authorization) {
            return res.status(400).json({
                mensagem: 'Token ausente no cabeçalho da requisição'
            })
        }

        // estamos trabalhando com formato Bearer token que segue este formato abaixo:
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibm9tZS
        const token = authorization.split(' ')[1]
        const assinatura = jwt.verify(token, chaveSecreta)
    
        let {iat, exp, ...usuario } = assinatura
        req.usuario = usuario
        
        next()
    } catch (erro) {
        return res.status(400).json({
            mensagem: erro.message
        })
    }
}

module.exports = {
    validarAutenticacao
}