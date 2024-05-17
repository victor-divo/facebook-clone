const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerBranch', {
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
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Customers',
        key: 'id'
      }
    },
    regionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Regions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'CustomerBranch',
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
        name: "customers_company_id",
        using: "BTREE",
        fields: [
          { name: "customerId" },
        ]
      },
      {
        name: "CustomerBranch_regionId_foreign_idx",
        using: "BTREE",
        fields: [
          { name: "regionId" },
        ]
      },
    ]
  });
};
