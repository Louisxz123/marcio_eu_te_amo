const express = require('express');
const cors = require('cors');

// 1. Inicialização do App
const app = express();
const PORT = 3000;

// 2. Configurações / Middlewares
app.use(cors());          // Habilita o CORS para requisições externas
app.use(express.json());  // Permite que o Express entenda JSON no corpo das requisições

// 3. Definição de Rotas
/**
 * Rota GET Raiz
 * Retorna uma mensagem amigável para o frontend
 */
app.get('/', (req, res) => {
    return res.json({
        mensagem: "Uma mensagem amigável do backend para o frontend"
    });
});

// 4. Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`--- Servidor Backend Iniciado ---`);
    console.log(`Local: http://localhost:${PORT}`);
    console.log(`Pressione Ctrl+C para encerrar.`);
});