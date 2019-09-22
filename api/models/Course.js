//'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Course extends Sequelize.Model {}
  Course.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for user ID'
        },
        notEmpty: {
          msg: 'Please provide a value for user ID'
        },
      }
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for course title',
        },
        notEmpty: {
          msg: 'Please provide a value for course title',
        },
      }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for course description',
        },
        notEmpty: {
          msg: 'Please provide a value for course description',
        },
      }
    },
    estimatedTime: {
      type: Sequelize.STRING,
      allowNull: true, //nullable
    },
    materialsNeeded: {
      type: Sequelize.STRING,
      allowNull: true, //nullable
    },
  }, { sequelize });

  Course.associate = (models) => {
    // TODO Add associations.
    Course.belongsTo(models.User, {
      foreignKey: {
        fieldName: 'userId',
        field: 'userId',
        allowNull: false,
      },
      onDelete: 'cascade',
    });
  }

  return Course;
};
