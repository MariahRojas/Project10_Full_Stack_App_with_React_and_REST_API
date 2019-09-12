'use strict';
const Sequelize = require('sequelize');
const bcryptjs = require('bcryptjs');

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A value for firstName is required',
        },
        notEmpty: {
          msg: 'firstName can not be left empty',
        },
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A value for lastName is required',
        },
        notEmpty: {
          msg: 'lastName can not be left empty',
        },
      }
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use!'
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Please provide a vaild email address "
        },
        notNull: {
          msg: 'Email is required',
        },
        notEmpty: {
          msg: 'Password is required',
        },
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args:5,
          msg: "Password must be at least 8 characters long"
        },
        notNull: {
          msg: 'Password is required',
        },
        notEmpty: {
          msg: 'Password cannot be left empty',
        },
      }
    }
  }, { sequelize });

  User.beforeCreate(user => {
    let salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(user.password, salt);
  })

  User.associate = (models) => {
    // TODO Add associations.
    User.hasMany(models.Course, {
      foreignKey: {
        fieldName: 'userId',
        allowNull: false,
      }
    });
  };

  return User;
};
