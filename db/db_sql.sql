CREATE DATABASE node_log;

USE node_log;

CREATE TABLE users (
id_user INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

CREATE TABLE games (
id_game INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
name VARCHAR(255) NOT NULL UNIQUE,
description VARCHAR(500),
price DECIMAL(5, 2),
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE action_logs (
id_action INT PRIMARY KEY AUTO_INCREMENT,
id_user INT NOT NULL,
id_game INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
action VARCHAR(255),
FOREIGN KEY (id_user) REFERENCES users(id_user),
FOREIGN KEY (id_game) REFERENCES games(id_game)
);

CREATE TABLE request_logs (
id_request INT PRIMARY KEY AUTO_INCREMENT,
method VARCHAR(10) NOT NULL,
route VARCHAR(255) NOT NULL,
status_code INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM users;
SELECT * FROM games;
SELECT * FROM action_logs;
SELECT * FROM request_logs;