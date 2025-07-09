# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.

## Tecnologias e Bibliotecas Utilizadas

- **Node.js** (TypeScript)
- **Fastify** — Framework web para Node.js
- **Drizzle ORM** — ORM para banco de dados PostgreSQL
- **PostgreSQL** — Banco de dados relacional
- **Zod** — Validação de esquemas e variáveis de ambiente
- **drizzle-seed** — Seed de dados para Drizzle ORM
- **fastify-type-provider-zod** — Integração de validação de tipos com Zod
- **@fastify/cors** — Middleware CORS para Fastify

## Padrões de Projeto

- **Modularização por domínio**: Separação clara entre rotas HTTP, banco de dados e configuração.
- **Validação de ambiente**: Uso do Zod para garantir variáveis de ambiente válidas.
- **Migrations e Seeds**: Gerenciados via Drizzle ORM e drizzle-seed.

## Configuração e Setup

1. **Clone o repositório e instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   PORT=3333
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
   ```

3. **Rode as migrations e seeds:**
   ```bash
   npm run db:seed
   ```

4. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse a rota de health check:**
   ```
   GET http://localhost:3333/health
   ``` 