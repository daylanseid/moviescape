const config = require('./dbConfig');
const pgp = require('pg-promise')();

const db = pgp(config);
module.exports = db