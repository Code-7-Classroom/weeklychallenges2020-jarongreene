DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE movies(
	title VARCHAR(255), 
    release_date DATE, 
    rating ENUM('G','PG','PG13','R','MA')
);

INSERT INTO movies(title, release_date, rating)
VALUES("Training Day", "2001-06-19", "R"),
("Up", "2009-02-14", "PG13"),
("Taken", "2009-03-24", "R"),
("The Equalizer", "2014-11-15", "R"),
("The Matrix", "1999-03-15", "R"),
("The Replacement Killers", "1998-01-02", "R"),
("High school musical", "2006-01-20", "PG-13"),
("Step brothers", "2010-04-20", "PG13"),
("Easy A", "2010-11-15", "R"),
("Camp Rock", "2008-12-12", "PG13");

SELECT * FROM movies WHERE title LIKE '%s%' ORDER BY release_date;