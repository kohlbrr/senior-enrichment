'use strict';

const Sequelize = require('sequelize');
const db = require('../index.js');
const Student = require('./student');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING // Link
  }
},{
  instanceMethods: {
    getStudents: () => {
      return Student.findAll({
        where: {
          campusId: this.id
        }
      })
    }
  },
  hooks: {
    beforeDestroy: (campus) => {
      console.log(campus)
      return Student.destroy({
        where: {
          campusId: campus.id
        }
      })
    }
  }
})

module.exports = Campus;
