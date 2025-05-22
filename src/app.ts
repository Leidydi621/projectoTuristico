import express from 'express';
import cors from 'cors';
import errorHandler from 'middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// * importar las rutas aqui 



// * Middleware para manejar errores de la aplicación.
app.use(errorHandler);

export default app;
