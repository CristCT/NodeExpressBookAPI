## NodeExpressBookAPI

## Description

An API built with Node.js and Express.js that provides endpoints for books and users. It contains routes to book information, reviews, and user registration and login functionality.

## Quick start

### 1. Installation
```bash
git clone https://github.com/CristCT/NodeExpressBookAPI.git
cd NodeExpressBookAPI
npm install
```

### 2. Run the app
```bash
npm start
```

## Endpoints

### Books

- `GET /books`: Get all books
- `GET /books/isbn/:isbn`: Search for a book by ISBN
- `GET /books/author/:author`: Search for books by author
- `GET /books/title/:title`: Search for books by title
- `GET /:id/reviews`: Get reviews for a book
- `POST /:id/reviews`: Add or modify a book review
- `DELETE /:id/reviews`: Delete a book review

### Users

- `POST /users/register`: Register a new user
- `POST /users/login`: Log in as a registered user

## Built With

- Node.js
- Express.js

## Author

- [Cristian Cuevas Tapia](https://github.com/CristCT)
- [LinkedIn](https://www.linkedin.com/in/cristian-cuevas-tapia/)