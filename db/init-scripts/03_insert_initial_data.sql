INSERT INTO book (isbn, title)
VALUES  ('9780743273565', 'The Great Gatsby'),
        ('9780060935467', 'To Kill a Mockingbird'),
        ('9781451673319', 'Fahrenheit 451'),
        ('9780451524935', '1984'),
        ('9780141439518', 'Pride and Prejudice'),
        ('9780261103344', 'The Hobbit'),
        ('9780141439662', 'Sense and Sensibility'),
        ('9780062409867', 'Go Set a Watchman')
        ('9780060731335', 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything'),
        ('9780062315007', 'The Alchemist');

INSERT INTO author (author_id, author_name)
VALUES  ('aaaaa00000', 'F. Scott Fitzgerald'),
        ('aaaaa00001', 'Harper Lee'),
        ('aaaaa00002', 'Ray Bradbury')
        ('aaaaa00003', 'George Orwell')
        ('aaaaa00004', 'Jane Austen'),
        ('aaaaa00005', 'J.R.R. Tolkien'),
        ('aaaaa00006', 'Steven D. Levitt'),
        ('aaaaa00007', 'Stephen J. Dubner'),
        ('aaaaa00008', 'Paulo Coelho');

INSERT INTO book_author (book_author_id, isbn, author_id)
VALUES  ('7hD4E2j9W5', '9780743273565', 'aaaaa00000'),
        ('G5r6L2q9F8', '9780060935467', 'aaaaa00001'),
        ('P1bM9nC6x5', '9781451673319', 'aaaaa00002'),
        ('K3s7Y2h8A1', '9780141439518', 'aaaaa00004'),
        ('4wS9eR7tY2', '9780451524935', 'aaaaa00003'),
        ('Q6g8P2jT9L', '9780261103344', 'aaaaa00005'),
        ('X5dA1mG3r9', '9780141439662', 'aaaaa00004'),
        ('B2vN4kH6s7', '9780062409867', 'aaaaa00001'),
        ('Y9tU5iJ7o4', '9780060731335', 'aaaaa00006'),
        ('F8zD3xS1c6', '9780060731335', 'aaaaa00007'),
        ('F8zD3xS19i', '9780062315007', 'aaaaa00008');
