-- Active: 1695234467841@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE posts(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    creator TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DEFAULT(DATETIME('now', 'localtime')),
    image TEXT NOT NULL,
    FOREIGN KEY (creator) REFERENCES users(id)
);

drop table posts;

CREATE TABLE comments(
    creator_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    comment TEXT NOT NULL,
    created_at DEFAULT(DATETIME('now', 'localtime')),
    FOREIGN KEY (creator_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

insert into comments(creator_id, post_id, comment)
VALUES
('d1e2f360-6540-4bf8-a477-f4ac7f7b5edc',
 '7e12cb7d-5dd5-45ec-bf30-da3466282d9f',
 'Testando os comentários2');

select u.username, p.id, p.creator, p.title, p.content, p.created_at
from posts as p
inner join users as u
where p.creator = u.id;