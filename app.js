import express, { json } from 'express';
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

app.use(json());
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});