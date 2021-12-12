DROP TABLE IF EXISTS photos;

CREATE TABLE photos(
    pid SMALLSERIAL PRIMARY KEY,
    uid references users(id),
    url VARCHAR NOT NULL,

    unique(pid, url)
)

INSERT INTO photos VALUES (1, 1, https://i.imgur.com/4021Epi.jpg);
INSERT INTO photos VALUES (2, 1, https://i.imgur.com/hcoLG5k.jpg);
INSERT INTO photos VALUES (3, 3, https://i.imgur.com/4021Epi.jpg);
INSERT INTO photos VALUES (4, 4, https://i.imgur.com/2jEkk7i.jpg);