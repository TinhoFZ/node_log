const conn = require('../db/conn');
const logAction = require('../utils/logger');

exports.createGame = (req, res) => {
    const { name, description, price } = req.body;

    const userId = req.params.userId;

    const sql = `
        INSERT INTO games (id_user, name, description, price)
        VALUES (?, ?, ?, ?)
    `

    conn.query(sql, [userId, name, description, price], (err, result) => {
        if (err) {
            console.log(err);
            return res.send('Error');
        }

        const idGame = result.insertId;

        logAction({
            id_user: userId,
            id_game: idGame,
            action: 'GAME_CREATED' 
        });
        
        res.redirect(`/users/${userId}/games`);
    });
};

exports.getGames = (req, res) => {
    const userId = req.params.userId;

    const sql = `
        SELECT *
        FROM games
        WHERE id_user = ?
    `

     conn.query(sql, [ userId ], (err, data) => {
        if (err) {
            console.log(err);
            res.send('Error');
        }
    
        res.render('games/dashboard', { userId: userId, gameList: data });
     });
};