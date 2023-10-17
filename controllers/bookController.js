import bookModel from '../models/bookModel.js';
const { books, reviews } = bookModel;

// Task 1: Get the book list available in the shop.
function getAllBooks(req, res) {
    res.json(books);
}

// Task 2: Get the books based on ISBN.
function getBookByISBN(req, res) {
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
}

// Task 3: Get all books by Author.
function getBooksByAuthor(req, res) {
    const booksByAuthor = books.filter(b => b.author === req.params.author);
    if (booksByAuthor.length) {
        res.json(booksByAuthor);
    } else {
        res.status(404).send('Books not found for the given author');
    }
}

// Task 4: Get all books based on Title
function getBooksByTitle(req, res) {
    const booksByTitle = books.filter(b => b.title.includes(req.params.title));
    if (booksByTitle.length) {
        res.json(booksByTitle);
    } else {
        res.status(404).send('Books not found with the given title');
    }
}

// Task 5: Get book Review.
function getBookReviews(req, res) {
    const bookReviews = reviews.filter(r => r.bookId == req.params.id);
    if (bookReviews.length) {
        res.json(bookReviews);
    } else {
        res.status(404).send('No reviews found for the given book');
    }
}

// Task 8: Add/Modify a book review.
function addOrModifyReview(req, res) {
    const { review } = req.body;

    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).send('Book not found');
    }

    const existingReview = reviews.find(r => r.bookId === parseInt(req.params.id));
    if (existingReview) {
        existingReview.review = review;
        res.json({ message: "Review updated successfully!" });
    } else {
        const newReview = { bookId: parseInt(req.params.id), review };
        reviews.push(newReview);
        res.status(201).json({ message: "Review added successfully!" });
    }
}

// Task 9: Delete book review added by that particular user 
function deleteReview(req, res) {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).send('Book not found');
    }

    const existingReview = reviews.find(r => r.bookId === parseInt(req.params.id));
    if (existingReview) {
        reviews.splice(reviews.indexOf(existingReview), 1);
        res.json({ message: "Review deleted successfully!" });
    } else {
        res.status(404).send('Review not found');
    }
}

// Task 10: Get all books – Using async callback function
async function getAllBooksAsync(req, res) {
    try {
        res.json(books);
    } catch (error) {
        res.status(500).send('Error retrieving books');
    }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBNPromise(req, res) {
    return new Promise((resolve, reject) => {
        const book = books.find(b => b.isbn === req.params.isbn);
        if (book) {
            resolve(book);
        } else {
            reject(new Error('Book not found'));
        }
    })
    .then(book => res.json(book))
    .catch(error => res.status(404).send(error.message));
}

// Task 12: Search by Author – Using async/await
async function getBooksByAuthorAsync(req, res) {
    const booksByAuthor = books.filter(b => b.author === req.params.author);
    if (booksByAuthor.length) {
        res.json(booksByAuthor);
    } else {
        res.status(404).send('Books not found for the given author');
    }
}

// Task 13: Search by Title – Using async/await
async function getBooksByTitleAsync(req, res) {
    const booksByTitle = books.filter(b => b.title.includes(req.params.title));
    if (booksByTitle.length) {
        res.json(booksByTitle);
    } else {
        res.status(404).send('Books not found with the given title');
    }
}

export {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle,
    getBookReviews,
    addOrModifyReview,
    deleteReview
};