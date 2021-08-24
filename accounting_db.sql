DROP DATABASE IF EXISTS accounting;
CREATE DATABASE IF NOT EXISTS accounting;

USE accounting;

CREATE TABLE IF NOT EXISTS types(
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(7)
);


CREATE TABLE IF NOT EXISTS users(
	id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS operations (
	id INT PRIMARY KEY auto_increment,
    concept VARCHAR(50),
    amount INT NOT NULL,
    date DATE,
    typeId INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (typeId) REFERENCES types(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);

INSERT INTO types(name) VALUES('ingreso'), ('egreso');
