DROP TABLE IF EXISTS users;

CREATE TABLE users(
    uid             SMALLSERIAL PRIMARY KEY,
    firstname       character(20) NOT NULL,
    stoid           character(6) NOT NULL,
    unique(uid, stoid)
);

INSERT INTO users (firstname, stoid) VALUES ('Areeba', 194200);
INSERT INTO users (firstname, stoid) VALUES ('Jayel', 193440);
INSERT INTO users (firstname, stoid) VALUES ('Victoria', 191890);
INSERT INTO users (firstname, stoid) VALUES ('Inna', 176235);