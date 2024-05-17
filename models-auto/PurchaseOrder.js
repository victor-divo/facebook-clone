const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PurchaseOrder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    poDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transactionType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recipientName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recipientPhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recipientAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    soldToName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    soldToPhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    soldToAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    files: {
      type: DataTypes.JSON,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customerBranchId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CustomerBranch',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'PurchaseOrder',
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
        name: "PurchaseOrder_customerBranchId_foreign_idx",
        using: "BTREE",
        fields: [
          { name: "customerBranchId" },
        ]
      },
    ]
  });
};
