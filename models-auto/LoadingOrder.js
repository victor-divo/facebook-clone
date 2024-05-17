const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'LoadingOrder',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      loDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      soItemId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'SalesOrderItem',
          key: 'id',
        },
      },
      loNumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      driverId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Driver',
          key: 'id',
        },
      },
      driverName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      nopolMT: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      unit: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      poId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'PurchaseOrder',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'LoadingOrder',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'LO-SOItemId',
          using: 'BTREE',
          fields: [{ name: 'soItemId' }],
        },
        {
          name: 'LoadingOrder_poId_foreign_idx',
          using: 'BTREE',
          fields: [{ name: 'poId' }],
        },
      ],
    }
  )
}
