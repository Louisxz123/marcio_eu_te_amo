Você é um desenvolvedor backend experiente em Node.js.

Crie um backend simples usando Node.js com Express que siga EXATAMENTE as instruções abaixo.

REQUISITOS DO PROJETO:

1. Estrutura do projeto:
- Um arquivo principal chamado server.js
- Um package.json
- Um arquivo .gitignore

2. Dependências:
- Use apenas: express e nodemon (como dev dependency)

3. Configuração do servidor:
- O servidor deve rodar na porta 3000
- Usar Express
- Usar CORS habilitado
- Usar express.json()

4. Rotas:
- Criar uma rota GET na raiz "/"
- Essa rota deve responder um objeto JavaScript (JSON) contendo:
  {
    mensagem: "Uma mensagem amigável do backend para o frontend"
  }

5. Organização do código:
- Código limpo e comentado
- Separar a criação do app, configuração e start do servidor de forma organizada
- Mostrar também o script no package.json para rodar com nodemon

6. .gitignore:
- Deve ignorar:
  node_modules
  .env
  logs
  *.log

7. Scripts no package.json:
- "start": "node server.js"
- "dev": "nodemon server.js"

8. Mostrar também os comandos necessários para:
- npm init
- instalar as dependências

9. O código deve estar pronto para rodar sem erros após a instalação das dependências.


Gere todos os arquivos necessários com seus conteúdos completos.