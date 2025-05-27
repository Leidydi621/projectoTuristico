import { Sequelize } from 'sequelize';
import loadDynamicModules from 'utils/loadDynamicModel';


export default function initializeModels(sequelize: Sequelize): typeof sequelize.models {
  try {
    loadDynamicModules([__dirname, "..", "models"], sequelize)
      .then(() => {
        console.log('[✅] Dynamic models loaded successfully.');
      })
      .catch((error) => {
        console.error('[❌] Error loading dynamic models:', error);
        throw error;
      });
    return sequelize.models;
  } catch (error) {
    console.log(`❌: Error initializing models`, error);
    throw error;
  }
}
