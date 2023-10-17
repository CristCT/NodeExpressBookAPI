const books = [
    { id: 1, title: "The Pragmatic Programmer: From Journeyman to Master", author: "Andrew Hunt, David Thomas", isbn: "978-0201616224" },
    { id: 2, title: "Clean Code: A Handbook of Agile Software Craftsmanship", author: "Robert C. Martin", isbn: "978-0132350884" },
    { id: 3, title: "Design Patterns: Elements of Reusable Object-Oriented Software", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", isbn: "978-0201633610" },
    { id: 4, title: "Code Complete: A Practical Handbook of Software Construction", author: "Steve McConnell", isbn: "978-0735619678"}
];

const reviews = [
    { bookId: 1, review: "This book is a must-read for any software developer. It's full of practical advice and insights that will help you become a better programmer." },
    { bookId: 2, review: "If you're serious about writing clean, maintainable code, then this book is a must-read. It's packed with practical advice and real-world examples." }
];

export default {
    books,
    reviews
};