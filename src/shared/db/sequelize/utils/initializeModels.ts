import { Sequelize } from 'sequelize';
import loadDynamicModules from 'utils/loadDynamicModel';


export default function initializeModels(sequelize: Sequelize): typeof sequelize.models {
  loadDynamicModules([__dirname, "..", "models"], sequelize)
  return sequelize.models;
}
