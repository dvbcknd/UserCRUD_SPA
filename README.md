# User Management SPA

## Descrição:
Aplicação front-end desenvolvida com **JavaScript puro (Vanilla JS)**, utilizando **Vite** como bundler e Tailwind CSS via CLI para estilização.
O projeto consome uma **API REST simulada com json-server**, permitindo o gerenciamento básico de usuários, **utilizando os métodos HTTP (GET, POST, PATCH, DELETE)**.

## O objetivo do projeto é praticar:

- Consumo de API REST
- A parte Front End dos métodos HTTP
- Manipulação do DOM
- Arquitetura de front-end sem frameworks
- Fluxo de uma SPA simples
- Integração com ferramentas modernas do ecossistema front-end

## Funcionalidades (concluídas):

- Listagem de usuários consumindo API REST
- Cadastro de novos usuários
- Edição de usuários
- Exclusão de usuários
- Interface dinâmica (SPA, sem recarregar a página)

## Em desenvolvimento:

- Busca/filtro de usuários

## Tecnologias utilizadas:

- JavaScript (ES6+)
- Vite
- Tailwind CSS
- json-server
- HTML5

## Pré-requisitos
Antes de executar o projeto, você precisa ter instalado:
- Node.js
- npm

#

## Como executar o projeto 

1️⃣ Clonar o repositório:
```bash
git@github.com:dvbcknd/User_Management_SPA.git
```

2️⃣ Instalar as dependências:
```bash
npm install
```
3️⃣ Executar o servidor da API (json-server)
Em um terminal separado:
```bash
npx json-server --watch ./server/db.json --port 3000
```
A API ficará disponível em:
```bash
http://localhost:3000
```

4️⃣ Executar o front-end (Vite)
Em outro terminal:
```bash
npm run dev
```
A aplicação estará disponível em:
```bash
http://localhost:5173
```

## Observações:

- O projeto não utiliza frameworks front-end (React, Vue, etc).
- Toda a manipulação de estado e DOM é feita manualmente com JavaScript.
- Ideal para estudo e consolidação de fundamentos de front-end.

## Autor:
Bruno Gomes

Estudante de Ciência da Computação e desenvolvedor FullStack em formação.
