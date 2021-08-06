var pool = require("./connection");

module.exports.getUsers = async function() {
    try {
        let result = await pool.query("SELECT * FROM users");
        let users = result.rows;
        return {status: 200, data: users}
    } catch (error) {
        console.log(error);
        return {status: 500, data: {msg: "Server error. Contact admin"}}
    }
}