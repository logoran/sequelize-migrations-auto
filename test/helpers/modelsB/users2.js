/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users2', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    email2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'c2NyeXB0AA0AAAAIAAAAASDKJd5xYUYMY4Yq1uAHItGurnqxYlWrgZ89CXruvc3voXuTQk8c7I2+07ZGKfnwWRughz7EXAsRtltxhhj7P5WgtNpqhQccBdWOOirkbw+w'
    },
    business_id2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'users2',
    indexes: [
      {
        name: 'users_name_email1',
        method: 'BTREE',
        fields: ['name', 'email']
      }
    ]
  });
};
