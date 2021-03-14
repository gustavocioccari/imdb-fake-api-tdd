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