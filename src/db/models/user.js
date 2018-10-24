const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');

const User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    },    
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    }
  });
  
  // force: true will drop the table if it already exists
  User.sync({force: false}).then(() => {
    // Table created
    /*return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });*/
  });

  module.exports = User;