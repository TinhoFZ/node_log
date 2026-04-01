const conn = require('../db/conn');
const logAction = require('../utils/logger');

exports.createUser = (req, res) => {
    const { email, password } = req.body;

    const sql = "INSERT INTO users (email, password) VALUES (?, ?)"

    conn.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.send('Error');
        }

        const userId = result.insertId;

        logAction({
            id_user: userId,
            action: 'USER_CREATED'
        });
    });
    
    
}

exports.updateUser = (req, res) => {
    const { email, password } = req.body;

    const sql = `
        UPDATE users 
        SET email = ?, password = ?
        WHERE id_user = ?
        `;

    conn.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.send('Error');
        }

        const userId = result.insertId;

        logAction({
            id_user: userId,
            action: 'USER_UPDATED'
        })
    });
}