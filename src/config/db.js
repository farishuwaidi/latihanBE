const { Pool } = require('pg');
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'latihan_be',
    password: 'POWERfizi123',
    port: 5432
})

module.exports = pool;