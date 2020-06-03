DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE cars(
	make VARCHAR(50),
    model VARCHAR(50),
    year INT 
);

INSERT INTO cars(make, model, year)
VALUES ("Chrysler", "PT Crusier", 2001),
("Chrysler", "300M", 2003),
("Chrysler", "MiniVan", 2005);

-- Add Two Cars to the Cars Table
INSERT INTO cars(make, model, year)
VALUES ("Honda", "Civic", 2020),
("Honda", "accord", 2005);

SELECT * FROM cars;