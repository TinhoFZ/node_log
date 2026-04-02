const conn = require('../db/conn');
const logAction = require('../utils/logger');

exports.registerUser = (req, res) => {
    const { email, password } = req.body;

    const sql = `
        INSERT INTO users (email, password) 
        VALUES (?, ?)
    `

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

        res.render('users/choice', { user: userId });
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    const sql = `
        SELECT id_user
        FROM users
        WHERE email = ? AND password = ?
    `

    conn.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.send('Error');
        }

        const userId = result[0].id_user;

        logAction({
            id_user: userId,
            action: 'USER_LOGIN' 
        });

        res.render('users/choice', { user: userId });
    })
}

exports.getChoice = (req, res) => {
    const id = req.params.id;

        const sql = `
        SELECT * 
        FROM users 
        WHERE id_user = ?
    `;
    
    conn.query(sql, [id], (err, data) =>{
        if (err) {
            console.log(err);
            return res.send('Error');
        }

        res.render('users/choice', { user: id })
    });
}

exports.getEditUser = (req, res) => {
    const id = req.params.id;

    const sql = `
        SELECT * 
        FROM users 
        WHERE id_user = ?
    `;
    
    conn.query(sql, [id], (err, data) =>{
        if (err) {
            console.log(err);
            return res.send('Error');
        }

        res.render('users/edit', { user: data[0] })
    });
};

exports.updateUser = (req, res) => {
    const { email, password } = req.body;
    const id = req.params.id;

    const sql = `
        UPDATE users 
        SET email = ?, password = ?
        WHERE id_user = ?
        `;

    conn.query(sql, [email, password, id], (err) => {
        if (err) {
            console.log(err);
            return res.send('Error');
        }

        logAction({
            id_user: id,
            action: 'USER_UPDATED'
        })

        res.render('users/home');
    });
};