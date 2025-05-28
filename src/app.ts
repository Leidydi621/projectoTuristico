import mainRoutes from '@routes/v1/main.routes';
import cors from 'cors';
import express from 'express';
import errorHandler from 'middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// * importar las rutas aqui
app.use('/api', mainRoutes);

// * Middleware para manejar errores de la aplicación.
app.use(errorHandler);

export default app;
