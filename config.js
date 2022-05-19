const mysql = require("mysql")


// databse credential
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mobile_legend"
})


// integrating
connection.connect((error)=> {
    if (error) throw error
    console.log("database aman 👻👻😘")
})

module.exports = connection