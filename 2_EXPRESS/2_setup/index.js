const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Estou com sdd de comer batatinhas fritas')
})

app.listen(3000 , () => {
    console.log('App rodando na porta 3000')
})