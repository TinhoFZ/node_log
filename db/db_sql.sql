CREATE DATABASE node_log;

USE node_log;

CREATE TABLE users (
id_user INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

CREATE TABLE games (
id_game INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL UNIQUE,
description VARCHAR(500),
price DECIMAL(5, 2)
);

CREATE TABLE actions_log (
id_log BIGINT PRIMARY KEY AUTO_INCREMENT,
id_user INT NOT NULL,
id_game INT,
date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
action_type VARCHAR(255),
FOREIGN KEY (id_user) REFERENCES users(id_user),
FOREIGN KEY (id_game) REFERENCES games(id_game)
);

INSERT INTO users (email, password)
VALUES ('emailBom@yahoo.com', '123');

INSERT INTO games (name)
VALUES ('Dota 2');

INSERT INTO actions_log (id_user, action_type)
VALUES (1, 'LOGIN');

SELECT * FROM users;