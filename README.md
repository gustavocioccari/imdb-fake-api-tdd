## The project
It is an API that [IMDb](https://www.imdb.com/) could use to show movies information and it has the following features:

- Admin
  - Sign Up, update, deactivation
- User
  - Sign Up, update, deactivation
- Movies
  - Add to DB (only admins can add movies to DB)
  - Rating (only users can rate movies. Tha rate must be from 0 to 4)
  - Index (can filter by director, name, genre or actors)
  - Detail (show details about an specific movie and its average rating)

### Before start:
1. Install project dependencies with: `npm i`
2. Run the DB via docker with: `docker run --name imdb -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
3. Make migrations to create tables in the DB with: `npx sequelize db:migrate`

#### Starting/Testing the API:
* For running the development server use: `npm run dev`
* For running tests (it doesn't need to have DB initialized) use: `npm test`

<sub>*Disclaimer: there are only tests for user creation/authentication for now*</sub>

## Technologies in the project:

- **[NodeJS](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[JWT](https://github.com/auth0/node-jsonwebtoken)**
- **[BCryptJS](https://github.com/dcodeIO/bcrypt.js)**
- **[Sequelize](https://sequelize.org/master/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Jest](https://jestjs.io/)**
- **[SQLite](https://www.sqlite.org/index.html)**
- **[Faker](https://github.com/Marak/Faker.js)**
- **[Factory-Girl](https://github.com/simonexmachina/factory-girl)**
- **[ESLint](https://eslint.org/)**
- **[dotENV](https://github.com/motdotla/dotenv)**

## API Routes
- The routes can be tested using the Postman Collection.

# Sobre

Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto de avaliação de candidatos.

# 🏗 O que fazer?

- Você deve realizar um fork deste repositório e, ao finalizar, enviar o link do seu repositório para a nossa equipe. Lembre-se, NÃO é necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

# 🚨 Requisitos

- A API deverá ser construída em **NodeJS** ou **Rails**
- Implementar autenticação e deverá seguir o padrão **JWT**, lembrando que o token a ser recebido deverá ser no formato **Bearer**
- Caso seja desenvolvida em NodeJS o seu projeto terá que ser implementado em **ExpressJS** ou **SailsJS**
- Para a comunicação com o banco de dados utilize algum **ORM**/**ODM**
- Bancos relacionais permitidos:
  - MySQL
  - MariaDB
  - Postgre
- Bancos não relacionais permitidos:
  - MongoDB
- Sua API deverá seguir os padrões Rest na construção das rotas e retornos
- Sua API deverá conter a collection/variáveis do postman ou algum endpoint da documentação em openapi para a realização do teste
- É desejável que o teste esteja na liguagem  **JavaScript** buscando avaliar o entendimento completo da linguagem e não de estruturas ou dependências que abstraiam determinadas definições não alheias ao ECMAScript. No entanto, testes realizados em **TypeScript** também serão aceitos.

# 🕵🏻‍♂️ Itens a serem avaliados

- Estrutura do Projeto
- Segurança da API, como autenticação, senhas salvas no banco, SQL Injection e outros
- Boas práticas da Linguagem/Framework
- Seu projeto deverá seguir tudo o que foi exigido na seção [O que desenvolver?](##--o-que-desenvolver)
- Migrations para a criação das tabelas do banco relacional

# 🎁 Extra

Esses itens não são obrigatórios, porém desejados.

- Testes unitários
- Linter
- Code Formater

**Obs.: Lembrando que o uso de algum linter ou code formater irá depender da linguagem que sua API for criada**

# 🖥 O que desenvolver?

Você deverá criar uma API que o site [IMDb](https://www.imdb.com/) irá consultar para exibir seu conteúdo, sua API deve conter as seguintes features:

- Admin

  - Cadastro
  - Edição
  - Exclusão lógica (Desativação)

- Usuário

  - Cadastro
  - Edição
  - Exclusão lógica (Desativação)

- Filmes

  - Cadastro (Somente um usuário administrador poderá realizar esse cadastro)
  - Voto (A contagem dos votos será feita por usuário de 0-4 que indica quanto o usuário gostou do filme)
  - Listagem (deverá ter filtro por diretor, nome, gênero e/ou atores)
  - Detalhe do filme trazendo todas as informações sobre o filme, inclusive a média dos votos

**Obs.: Apenas os usuários poderão votar nos filmes e a API deverá validar quem é o usuário que está acessando, ou seja, se é admin ou não**

# 🔗 Links

- Documentação JWT https://jwt.io/
- Frameworks NodeJS:

  1. https://expressjs.com/pt-br/
  2. https://sailsjs.com/

- Guideline rails http://guides.rubyonrails.org/index.html
