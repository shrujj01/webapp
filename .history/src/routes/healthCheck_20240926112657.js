//Health check route used to fetch the details from sequelize object and check the request
//Error handling for any other request other than GET
//Error handling for Database connection fail 503

const express = require('express');
const router = express.Router();
const { sequelize } = require('../models');

// Middleware to allow only GET requests
router.all('/', (req, res, next) => {
  if (req.method !== 'GET') {
      return res.status(405).json({ error: "Method Not Allowed" }).setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
  next();
});

router.get('/', async (req, res) => {
  try {
      await sequelize.authenticate();
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.status(200).send();
  } catch (error) {
      console.error('Database connection failed:', error);
      // Only attempt to set headers and send a response if no response has been sent yet:
      if (!res.headersSent) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.status(503).send();
      }
  }
});
module.exports = router;
