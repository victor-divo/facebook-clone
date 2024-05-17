const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeliveryOrder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    poId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PurchaseOrder',
        key: 'id'
      }
    },
    soItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SalesOrderItem',
        key: 'id'
      }
    },
    doDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Driver',
        key: 'id'
      }
    },
    driverName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nopolMT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    files: {
      type: DataTypes.JSON,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeliveryOrder',
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
        name: "poId",
        using: "BTREE",
        fields: [
          { name: "poId" },
        ]
      },
      {
        name: "soItemId",
        using: "BTREE",
        fields: [
          { name: "soItemId" },
        ]
      },
      {
        name: "driverId",
        using: "BTREE",
        fields: [
          { name: "driverId" },
        ]
      },
    ]
  });
};
