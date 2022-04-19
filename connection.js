const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rootuser',
    password : 'sitar123',
    database : 'nodebooks20220406'
})

module.exports = connection