const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PurchaseOrderItem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    poId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PurchaseOrder',
        key: 'id'
      }
    },
    skuId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuelType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    do: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PurchaseOrderItem',
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
        name: "POItem-POId",
        using: "BTREE",
        fields: [
          { name: "poId" },
        ]
      },
    ]
  });
};
