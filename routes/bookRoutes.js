import { Router } from 'express';
const router = Router();
import { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle, getBookReviews, addOrModifyReview, deleteReview } from '../controllers/bookController.js';

router.get('/', getAllBooks);
router.get('/isbn/:isbn', getBookByISBN);
router.get('/author/:author', getBooksByAuthor);
router.get('/title/:title', getBooksByTitle);
router.get('/:id/reviews', getBookReviews);
router.post('/:id/reviews', addOrModifyReview);
router.delete('/:id/reviews', deleteReview);

export default router;