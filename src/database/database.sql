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
    created_at DEFAULT(DATE('now', 'localtime')),
    image TEXT NOT NULL,
    FOREIGN KEY (creator) REFERENCES users(id)
);

drop table posts;

select u.username, p.id, p.creator, p.title, p.content, p.created_at
from posts as p
inner join users as u
where p.creator = u.id;