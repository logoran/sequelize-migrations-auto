/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('citys', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mark: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    name_cn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pinyin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_local: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    v_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    v_name_cn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    v_name_local: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    full_name_cn: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    area: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    country_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    province_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    creator_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    operator_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'citys'
  });
};
