const conn = require('../db/conn');

function logAction({ id_user, id_game = null, action }) {
    const sql = `
        INSERT INTO action_logs (id_user, id_game, action)
        VALUES (?, ?, ?)
    `;

    conn.query(sql, [id_user, id_game, action], (err) => {
        if (err) {
            console.log('Erro no log: ', err);
        }
    })
    
}

module.exports = logAction;