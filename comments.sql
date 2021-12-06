DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
    cid             SMALLSERIAL PRIMARY KEY,
    uid             int references users(uid),

    comment         VARCHAR NOT NULL,
    votes           int NOT NULL DEFAULT 0,

    unique(cid, comment)
);

INSERT INTO comments (uid, comment, votes) VALUES (3, 'Tomato basil soup please!', 54);
INSERT INTO comments (uid, comment, votes) VALUES (2,'Where is the sriracha??', 26);
INSERT INTO comments (uid, comment, votes) VALUES (1,'lines are ridiculos. need another caf', 23);
INSERT INTO comments (uid, comment, votes) VALUES (4,'More normal soup options please.', 1);

ORDER BY votes;