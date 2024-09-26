const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/healthz', require('./src/routes/healthCheck'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});