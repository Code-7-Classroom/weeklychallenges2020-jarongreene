DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

-- Creates the books table
CREATE TABLE books(
	title VARCHAR(255),
    publish_date DATE,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("Harry Potter and the Philosopher's Stone", "1997-06-27", "J.K", "Rowling"),
("Harry Potter and the Chamber of Secrets", "1998-05-09", "J.K", "Rowling"),
("Harry potter and the Goblet of Fire", "2005-11-18", "J.K", "Rowling"),
("Harry Potter and the Deathly Hallows", "2007-06-21", "J.K", "Rowling"),
("Harry Potter and the Cursed Child", "2016-06-30", "J.K", "Rowling");

-- Inserts two books into the books table
INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("Harry Potter and the Prisoner of Azkaban", "2010-02-11", "J.K", "Rowling"),
("Harry potter and the order of the phoenix ", "2009-07-09", "J.K", "Rowling");

-- Delete the oldest book by publish date
DELETE FROM books ORDER BY publish_date LIMIT 1;

SELECT * FROM books;

-- Counts the number of Books in the table by book title
SELECT COUNT(title) FROM books;