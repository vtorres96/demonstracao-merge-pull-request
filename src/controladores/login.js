const bcrypt = require('bcrypt')
const conexao = require('../bancodedados/conexao')
const jwt = require('jsonwebtoken')
const chaveSecreta = require('../chaveSecreta')

const login = async (req, res, next) => {
    try {
        let { email, senha } = req.body

        if (!email || !senha) {
            return res.status(400).json({
                mensagem: 'Preencha os campos obrigatórios: email e senha'
            })
        }

        const usuarioEncontrado = await conexao.query(
            'select * from usuarios where email = $1',
            [email]
        )

        if (usuarioEncontrado.rowCount == 0) {
            return res.status(400).json({
                mensagem: 'E-mail ou senha inválidos'
            })
        }
            
        if (!await bcrypt.compare(senha, usuarioEncontrado.rows[0].senha)) {
            return res.status(400).json({
                mensagem: 'E-mail ou senha inválidos'
            })
        }

        let { senha: senhaCriptografada, ...usuario } = usuarioEncontrado.rows[0]
        
        const token = jwt.sign(
            usuario,
            chaveSecreta,
            {
                'expiresIn': '2h'
            }
        )

        return res.status(200).json({
            usuario,
            token
        })
    } catch (erro) {
        return res.status(400).json({
            mensagem: erro.message
        })
    }
}

module.exports = {
    login
}