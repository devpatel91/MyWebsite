var path = require('path');
var Sequelize = require('sequelize');

var env = require(path.join(__dirname, '../env'));

var db = new Sequelize(env.DATABASE_URI, {
    logging: env.LOGGING
});


var Contact = db.define('contact', {
    name: {
        type: Sequelize.STRING,
    },
    message: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.TEXT,
    }
})

module.exports = {
   Contact: Contact
};
