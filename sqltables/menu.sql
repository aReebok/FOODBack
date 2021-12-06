DROP TABLE IF EXISTS cagemenu;

CREATE TABLE cagemenu(
    fid             SMALLSERIAL PRIMARY KEY,
    category        VARCHAR NOT NULL,
    item            VARCHAR NOT NULL,
    price           VARCHAR NOT NULL,
    unique(fid, item)
);

INSERT INTO cagemenu (category, item, price) VALUES ('sandwich', 'St. Olaf Burger', '$8.00');
INSERT INTO cagemenu (category, item, price) VALUES ('sandwich', 'Hamburger', '$6.00');
INSERT INTO cagemenu (category, item, price) VALUES ('sandwich', 'Cheeseburger', '$6.50');
INSERT INTO cagemenu (category, item, price) VALUES ('sandwich', 'Chicken tender melt', '$5.60');
INSERT INTO cagemenu (category, item, price) VALUES ('sandwich', 'Margherita grilled cheese', '$4.75');
INSERT INTO cagemenu (category, item, price) VALUES ('sandwich','Grilled Cheese','$4.00');

INSERT INTO cagemenu (category, item, price) VALUES ('wraps', 'Crispy chicken bacon ranch wrap', '$6.00');
INSERT INTO cagemenu (category, item, price) VALUES ('wraps', 'Crispy buffalo chicken wrap', '$6.00');
INSERT INTO cagemenu (category, item, price) VALUES ('wraps', 'Grilled chicken Ceaser wrap', '$6.00');
INSERT INTO cagemenu (category, item, price) VALUES ('wraps', 'Roasted vegetable  wrap', '$5.50');

INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Americano', '$1.60');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Espresso', '$1.40');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Latte', '$2.50');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Mocha', '$2.80');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Cappuccino', '$2.50');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Chai latte', '$2.95');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Swwet matcha latte', '$2.95');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Hot tea', '$1.50');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Hot chocolate', '$2.50');

INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Cold press coffee', '$2.75');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Ole palmer', '$1.75');
INSERT INTO cagemenu (category, item, price) VALUES ('beverage', 'Italian soda', '$1.60');

INSERT INTO cagemenu (category, item, price) VALUES ('salad', 'Ceaser salad', '$3.50');
INSERT INTO cagemenu (category, item, price) VALUES ('salad', 'Chicken Ceaser salad', '$5.50');
INSERT INTO cagemenu (category, item, price) VALUES ('salad', 'Chef salad', '$6.50');
INSERT INTO cagemenu (category, item, price) VALUES ('salad', 'Chicken chef salad', '$9.25');

INSERT INTO cagemenu (category, item, price) VALUES ('snack', 'Yogurt parfait', '$3.00');
INSERT INTO cagemenu (category, item, price) VALUES ('snack', 'Plainview yogurt cup', '$1.60');
INSERT INTO cagemenu (category, item, price) VALUES ('snack', 'Fruit cup', '$2.75');
INSERT INTO cagemenu (category, item, price) VALUES ('snack', 'Whole fruit', '$0.85');
INSERT INTO cagemenu (category, item, price) VALUES ('snack', 'Assorted chips', '$1.00');