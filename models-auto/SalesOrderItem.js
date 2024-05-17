const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderItem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    soId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SalesOrder',
        key: 'id'
      }
    },
    skuId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Sku',
        key: 'id'
      }
    },
    fuelType: {
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
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    loFiles: {
      type: DataTypes.JSON,
      allowNull: true
    },
    doFiles: {
      type: DataTypes.JSON,
      allowNull: true
    },
    bastFiles: {
      type: DataTypes.JSON,
      allowNull: true
    },
    atgData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    poItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PurchaseOrderItem',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'SalesOrderItem',
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
        name: "SOItem-PartnerLogisticId",
        using: "BTREE",
        fields: [
          { name: "partnerLogisticId" },
        ]
      },
      {
        name: "SOItem-SOId",
        using: "BTREE",
        fields: [
          { name: "soId" },
        ]
      },
      {
        name: "SOItem-SkuId",
        using: "BTREE",
        fields: [
          { name: "skuId" },
        ]
      },
      {
        name: "SalesOrderItem_poItemId_foreign_idx",
        using: "BTREE",
        fields: [
          { name: "poItemId" },
        ]
      },
    ]
  });
};
