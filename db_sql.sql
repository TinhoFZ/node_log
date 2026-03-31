CREATE DATABASE node_log;

USE node_log;

CREATE TABLE usuarios (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
senha VARCHAR(255) NOT NULL
);

CREATE TABLE jogos (
id_jogo INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL UNIQUE,
descricao VARCHAR(500),
preco DECIMAL(5, 2)
);

CREATE TABLE acao_log (
id_log BIGINT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
id_jogo INT,
data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
acao VARCHAR(255),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_jogo) REFERENCES jogos(id_jogo)
);

INSERT INTO usuarios (email, senha)
VALUES ('emailBom@yahoo.com', 123);

INSERT INTO jogos (nome)
VALUES ('Dota 2');

INSERT INTO acao_log (id_usuario, acao)
VALUES (1, 'LOGIN');