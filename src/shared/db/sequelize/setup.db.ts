import sequelize from '@config/sequelizeconfig';
import initializeModels from './utils/initializeModels';

const models = initializeModels(sequelize);
console.log('[ℹ️] Models registered in Sequelize:', Object.keys(sequelize.models));

export{ models, sequelize as dbConnection }; 