const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgress",
    host: "localhost",
    database: "students",
    password: "test",
    port: 5432
});

module.exports = pool;