DROP TABLE IF EXISTS votes;

CREATE TABLE votes(
    vid             SMALLSERIAL PRIMARY KEY,
    cid             int references comments(cid),
    uid             int references users(uid),

    response        VARCHAR NOT NULL,
    unique(cid, uid)
);
