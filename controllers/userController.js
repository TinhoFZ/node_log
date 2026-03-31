const conn = require('../db/conn');

exports.createUser = (req, res) => {
    const { email, password } = req.body;

    const sql = "INSERT INTO users (email, password) VALUES (?, ?)"

    conn.query(sql, [email, password], (err) => {
        console.log(err);
        return res.send('Error');
    });
    
}

exports.updateUser = (req, res) => {
    const { email, password } = req.body;

    const sql = `
        UPDATE users 
        SET email = ?, password = ?
        WHERE id_user = ?
        `;

    conn.query(sql, [email, password], (err) => {
        console.log(err);
        return res.send('Error');
    });
}