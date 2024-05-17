const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BAST', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bastNumber: {
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
    loDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bastDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    recipientAddress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amountShipped: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amountReceived: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amountLoss: {
      type: DataTypes.STRING(255),
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
    tableName: 'BAST',
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
