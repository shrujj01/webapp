//create a sequelize object
//Authenticate if the sequelize object is able to establish connection with the database
const Sequelize = require('sequelize');

//Fetching DB details from .env file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

//Authenticating the request based on the db details provided
//Throw Error if unable to connect to database
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = {
  sequelize
};
