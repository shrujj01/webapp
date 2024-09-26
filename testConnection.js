const { Sequelize } = require('sequelize');

// Create a connection to the database
const sequelize = new Sequelize('cloudassignment', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
  .finally(() => {
    sequelize.close();
  });