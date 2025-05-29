import { portServer } from "@config/dotenv";
import { dbConnection } from "@share/db/sequelize/setup.db";
import app from "app";

const server = app.listen(portServer, async () => {
  try {
    await dbConnection.sync({ alter: true })
    console.log(`
  [✅] Conexión a la base de datos establecida correctamente.
  [🔗] Conexión a la base de datos: ${dbConnection.getDatabaseName()}
  [🚀] ¡Servidor turístico en marcha!
  [✅] Escuchando en el puerto ${portServer}
  [🌐] Puedes usar la api de la aplicación en: http://localhost:${portServer}
  [📅] ¡Listo para recibir visitantes!
    `);
  } catch (error) {
    console.error(`[❌] ¡Ups! Ocurrió un error al iniciar el servidor:`, error);
  }
});

server.on("error", (err: Error) => {
  console.error(`[❌] ¡Ups! Ocurrió un error al iniciar el servidor:`, err);
});
