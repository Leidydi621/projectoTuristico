import { DataTypes, Sequelize } from "sequelize";
/**
 * User model definition for Sequelize ORM.
 * This model represents a user in the system with various attributes.
 * 
 * @param {Sequelize} sequelize - The Sequelize instance to define the model on.

 */
export default (sequelize: Sequelize) =>  { 
  sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondLastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fotoUrlPerfil: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("turista", "admin", "guide", "admin-cop"),
      allowNull: false,
    },
  });
} 