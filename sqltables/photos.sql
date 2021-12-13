DROP TABLE IF EXISTS photos;

CREATE TABLE photos(
<<<<<<< HEAD
    pid             SMALLSERIAL PRIMARY KEY,
    uid             int references users(uid),
    date            DATE DEFAULT CURRENT_DATE,
    url             VARCHAR NOT NULL,
    unique(uid, url)
=======
    pid SMALLSERIAL PRIMARY KEY,
    uid int references users(uid),
    date    DATE DEFAULT CURRENT_DATE,
    url VARCHAR NOT NULL,

    unique(pid, url)
>>>>>>> 78f69f285da391944a1764adb94b720ada98a0f2
);

INSERT INTO photos (uid, url) VALUES (1, 'https://i.imgur.com/4021Epi.jpg');
INSERT INTO photos (uid, url) VALUES (1, 'https://i.imgur.com/hcoLG5k.jpg');
INSERT INTO photos (uid, url) VALUES (3, 'https://i.imgur.com/4021Epi.jpg');
<<<<<<< HEAD
INSERT INTO photos (uid, url) VALUES (4, 'https://i.imgur.com/2jEkk7i.jpg');
=======
INSERT INTO photos (uid, url) VALUES (4, 'https://i.imgur.com/2jEkk7i.jpg');
>>>>>>> 78f69f285da391944a1764adb94b720ada98a0f2
