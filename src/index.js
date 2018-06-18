const path = require('path');
const express = require('express');

const ForestAdmin = require('forest-express-sequelize');
const { sequelize } = require('./backend/models');
const secret = require('../config/config');

const { User } = require('./backend/models');

const test = async () => {
  const user = await User.create({
    firstname: 'Leandro Vinícius',
    lastname: 'Silva Lopes',
    email: 'lvinsilva@gmail.com',
    cpf: '82883890153'
  });

  const userWithDetails = await User.findAll();

  console.log(JSON.stringify(userWithDetails));
};

const app = express();

app.use(
  ForestAdmin.init({
    modelsDir: path.resolve('./src/backend/models'),
    envSecret: secret.FOREST_ENV_SECRET,
    authSecret: secret.FOREST_AUTH_SECRET,
    sequelize: require('./backend/models').sequelize
  })
);

app.listen(process.env.PORT || 5000);
