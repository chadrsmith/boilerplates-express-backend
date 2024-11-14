require('module-alias/register');
const cors = require('cors');
const { json } = require('body-parser');

const express = require('express');

// import routes
const routes = require('./routes');

const app = express();

// set app configurations
app.use(cors());
app.use(json({ limit: '5mb' }));

app.use(routes)


if (require.main) {
  app.listen(process.env.PORT, () => {
    console.log(`API is running on: ${process.env.PORT}`)
  });
}
