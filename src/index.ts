import { portServer } from '@config/dotenv';
import app from 'app';

const server = app.listen(portServer, () => {
  console.log(`[🚀] ¡Servidor turístico en marcha!`);
  console.log(`[✅] Escuchando en el puerto ${portServer}`);
  console.log(
    `[🌐] Puedes usar la api de la aplicación en: http://localhost:${portServer}`,
  );
  console.log(`[📅] ¡Listo para recibir visitantes!`);
});

server.on('error', (err: Error) => {
  console.error(`[❌] ¡Ups! Ocurrió un error al iniciar el servidor:`, err);
});
