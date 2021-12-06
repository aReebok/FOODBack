DROP TABLE IF EXISTS cagemenu;

CREATE TABLE cagemenu(
    fid             SMALLSERIAL PRIMARY KEY,
    category        VARCHAR NOT NULL,
    item            VARCHAR NOT NULL,
    price           VARCHAR NOT NULL,
    unique(fid, item)
);

INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Americano', '$1.60');
INSERT INTO cagemenu (category, item, price) VALUES ('food/sandwich','Grilled Cheese','$4.00');