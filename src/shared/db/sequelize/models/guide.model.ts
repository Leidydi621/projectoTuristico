import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  sequelize.define('Guide', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spokenLanguages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    verifiedStatus: {
      type: DataTypes.ENUM('verified', 'pending'),
      defaultValue: 'pending',
    },
    averageRating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    totalReviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
