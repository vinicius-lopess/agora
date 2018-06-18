const { sequelize } = require('../../src/backend/models');

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

after(() => {
  sequelize.close();
});