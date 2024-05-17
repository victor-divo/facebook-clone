const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Driver', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partnerLogisticId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PartnerLogistic',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Driver',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "partnerLogisticId",
        using: "BTREE",
        fields: [
          { name: "partnerLogisticId" },
        ]
      },
    ]
  });
};
