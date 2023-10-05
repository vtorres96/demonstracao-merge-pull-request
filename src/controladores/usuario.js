const bcrypt = require('bcrypt')
const conexao = require('../bancodedados/conexao')
// {
//     "nome": "Victor",
//     "email": "victor.torres@cubos.academy",
//     "senha": "teste123"
// }
const cadastrar = async (req, res, next) => {
    try {
        let { nome, email, senha } = req.body

        if (!nome || !email || !senha) {
            return res.status(400).json({
                mensagem: 'Preencha os campos obrigatórios: nome, email e senha'
            })
        }

        const usuarioEncontrado = await conexao.query(
            'select * from usuarios where email = $1',
            [email]
        )

        if (usuarioEncontrado.rowCount > 0) {
            return res.status(400).json({
                mensagem: 'E-mail informado está vinculado a outro usuário.'
            })
        }

        let senhaCriptografada = await bcrypt.hash(senha, 10)

        const usuarioCriado = await conexao.query(
            'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning id, nome, email',
            [nome, email, senhaCriptografada]
        )

        return res.status(201).json(usuarioCriado.rows[0])
    } catch (erro) {
        return res.status(400).json({ mensagem: erro.message })
    }
}

const listar = (req, res, next) => {
    try {
        let usuario = req.usuario
        return res.status(200).json(usuario)
    } catch (erro) {
        return res.status(400).json({ mensagem: erro.message })
    }
}

const metodoViteira = (req, res, next) => {
    return res.status(200).json({ mensagem: 'ok' })
}

const metodoGui = (req, res) => {
    return res.status(200).json({ mensagem: 'add no lol: é o guilol' })
}
const metodoLeo = (req, res) => {
    return res.status(200).json({ mensagem: 'add no lol: é o guilol' })
};

module.exports = {
    cadastrar,
    listar,
    metodoViteira,
    metodoGui,
    metodoLeo
}