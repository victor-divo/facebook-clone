const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    soNumber: {
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
    tableName: 'SalesOrder',
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
        name: "SO-POId",
        using: "BTREE",
        fields: [
          { name: "poId" },
        ]
      },
    ]
  });
};
