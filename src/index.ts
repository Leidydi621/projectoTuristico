import { portServer } from "@config/dotenv";
import sequelize from "@config/sequelizeconfig";
import app from "app";

const server = app.listen(portServer, async () => {
  try {
    await sequelize.sync({ force: false });
    console.log(`[✅] Conexión a la base de datos establecida correctamente.`);
    console.log(`[🔗] Conexión a la base de datos: ${sequelize.getDatabaseName()}`);
    console.log(`[📅] Sincronización de modelos completada.`);
  } catch (error) {
    console.error(`[❌] Error al conectar a la base de datos:`, error);
  }

  console.log(`[🚀] ¡Servidor turístico en marcha!`);
  console.log(`[✅] Escuchando en el puerto ${portServer}`);
  console.log(
    `[🌐] Puedes usar la api de la aplicación en: http://localhost:${portServer}`
  );
  console.log(`[📅] ¡Listo para recibir visitantes!`);
});

server.on("error", (err: Error) => {
  console.error(`[❌] ¡Ups! Ocurrió un error al iniciar el servidor:`, err);
});
