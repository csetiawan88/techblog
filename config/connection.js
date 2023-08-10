require("dotenv").config();

const Sequelize = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;

// npm init
// npm install express-session
//npm install express
//npm i sequelize
//npm install connect-session-sequelize
//npm i nodemon
//npm i mysql2
//npm i dotenv
//npm install bcrypt
//npm i handlebars
//npm install express-handlebars
