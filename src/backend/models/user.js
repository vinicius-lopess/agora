'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      firstname: { type: DataTypes.STRING, allowNull: false },
      lastname: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      cpf: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
