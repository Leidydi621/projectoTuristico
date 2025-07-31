import { Model, ModelStatic } from 'sequelize';

/**
 *
 * @param sourceModel modelo de origen
 * @param targetModel modelo de destino
 * @param foreignKey  clave foránea que relaciona los modelos
 * @param alias objeto que contiene los alias para la relación
 * @param alias.fromSourceToTarget alias desde el modelo de origen al modelo de destino
 * @param alias.fromTargetToSource alias desde el modelo de destino al modelo de origen
 */

export function defineOneToOne<
  P extends Model = Model,
  C extends Model = Model,
>(
  sourceModel: ModelStatic<P>,
  targetModel: ModelStatic<C>,
  foreignKey: string,
  alias: { fromSourceToTarget: string; fromTargetToSource: string }
) {
  sourceModel.hasOne(targetModel, {
    as: alias.fromSourceToTarget.toLowerCase(),
  });
  targetModel.belongsTo(sourceModel, {
    foreignKey,
    as: alias.fromTargetToSource.toLowerCase(),
  });
}
