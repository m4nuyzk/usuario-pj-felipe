const express = require('express');
const path = require('path');

const validar = require('./middlewares/validar');

const app = express();

app.use(express.json());

//SERVIR ARQUIVOS ESTÁTICOS
app.post('/caddastro', validar, (req, res) => {
    res.json({ mensagem:"Paciente cadastrado com sucesso" });
});

app.listen(3000, () =>{
    console.log("Rodando na porta 3000");
});