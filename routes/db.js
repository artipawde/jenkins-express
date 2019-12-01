const mysql = require("mysql")

function connect()
{
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "manager",
        database: "dac_db",
        port: 3306
    })
    
    connection.connect()
    return connection
}


module.exports = {
    connect: connect
}