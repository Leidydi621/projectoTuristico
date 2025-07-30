import mainRoutes from '@routes/v1/main.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import errorHandler from '@middlewares/errorHandler';


const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// * importar las rutas aqui
app.use('/api', mainRoutes);

// * Middleware para manejar errores de la aplicación.
app.use(errorHandler);

export default app;
