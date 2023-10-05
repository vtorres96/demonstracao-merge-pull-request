const express = require('express')
const rotas = require('./rotas')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(process.env.PORT, function () {
    console.log(`Servidor rodando na porta http://localhost:${process.env.PORT}`);
})
//   Fix the Error EADDRINUSE
.on("error", function (err) {
process.once("SIGUSR2", function () {
    process.kill(process.pid, "SIGUSR2");
});
process.on("SIGINT", function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, "SIGINT");
});
});