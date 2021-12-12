DROP TABLE IF EXISTS photos;

CREATE TABLE photos(
    pid SMALLSERIAL PRIMARY KEY,
    uid references users(uid),
    url VARCHAR NOT NULL,

    unique(pid, url)
)

INSERT INTO photos (uid, url) VALUES (1, 'https://i.imgur.com/4021Epi.jpg');
INSERT INTO photos (uid, url) VALUES (1, 'https://i.imgur.com/hcoLG5k.jpg');
INSERT INTO photos (uid, url) VALUES (3, 'https://i.imgur.com/4021Epi.jpg');
INSERT INTO photos (uid, url) VALUES (4, 'https://i.imgur.com/2jEkk7i.jpg');