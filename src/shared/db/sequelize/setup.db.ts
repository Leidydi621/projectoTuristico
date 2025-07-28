import sequelize from '@config/sequelizeconfig';
import initializeModels from './utils/initializeModels';
import { defineOneToOne } from './utils/relationships';

const models = initializeModels(sequelize);
console.log('[ℹ️] Models registered in Sequelize:', Object.keys(sequelize.models));

const { User, Guide } = models;

// Define relationships
defineOneToOne(User, Guide, 'userId', {
  fromSourceToTarget: 'guide',
  fromTargetToSource: 'user',
});


export{ models, sequelize as dbConnection }; 