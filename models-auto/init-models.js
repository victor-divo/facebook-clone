var DataTypes = require("sequelize").DataTypes;
var _BAST = require("./BAST");
var _CustomerBranch = require("./CustomerBranch");
var _Customers = require("./Customers");
var _DeliveryOrder = require("./DeliveryOrder");
var _Driver = require("./Driver");
var _LoadingOrder = require("./LoadingOrder");
var _PartnerLogistic = require("./PartnerLogistic");
var _Prices = require("./Prices");
var _PurchaseOrder = require("./PurchaseOrder");
var _PurchaseOrderItem = require("./PurchaseOrderItem");
var _Regions = require("./Regions");
var _SalesOrder = require("./SalesOrder");
var _SalesOrderItem = require("./SalesOrderItem");
var _SequelizeData = require("./SequelizeData");
var _SequelizeMeta = require("./SequelizeMeta");
var _Sku = require("./Sku");
var _Users = require("./Users");
var _sessions = require("./sessions");

function initModels(sequelize) {
  var BAST = _BAST(sequelize, DataTypes);
  var CustomerBranch = _CustomerBranch(sequelize, DataTypes);
  var Customers = _Customers(sequelize, DataTypes);
  var DeliveryOrder = _DeliveryOrder(sequelize, DataTypes);
  var Driver = _Driver(sequelize, DataTypes);
  var LoadingOrder = _LoadingOrder(sequelize, DataTypes);
  var PartnerLogistic = _PartnerLogistic(sequelize, DataTypes);
  var Prices = _Prices(sequelize, DataTypes);
  var PurchaseOrder = _PurchaseOrder(sequelize, DataTypes);
  var PurchaseOrderItem = _PurchaseOrderItem(sequelize, DataTypes);
  var Regions = _Regions(sequelize, DataTypes);
  var SalesOrder = _SalesOrder(sequelize, DataTypes);
  var SalesOrderItem = _SalesOrderItem(sequelize, DataTypes);
  var SequelizeData = _SequelizeData(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Sku = _Sku(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);

  PurchaseOrder.belongsTo(CustomerBranch, { as: "customerBranch", foreignKey: "customerBranchId"});
  CustomerBranch.hasMany(PurchaseOrder, { as: "PurchaseOrders", foreignKey: "customerBranchId"});
  CustomerBranch.belongsTo(Customers, { as: "customer", foreignKey: "customerId"});
  Customers.hasMany(CustomerBranch, { as: "CustomerBranches", foreignKey: "customerId"});
  BAST.belongsTo(Driver, { as: "driver", foreignKey: "driverId"});
  Driver.hasMany(BAST, { as: "BASTs", foreignKey: "driverId"});
  DeliveryOrder.belongsTo(Driver, { as: "driver", foreignKey: "driverId"});
  Driver.hasMany(DeliveryOrder, { as: "DeliveryOrders", foreignKey: "driverId"});
  LoadingOrder.belongsTo(Driver, { as: "driver", foreignKey: "driverId"});
  Driver.hasMany(LoadingOrder, { as: "LoadingOrders", foreignKey: "driverId"});
  Driver.belongsTo(PartnerLogistic, { as: "partnerLogistic", foreignKey: "partnerLogisticId"});
  PartnerLogistic.hasMany(Driver, { as: "Drivers", foreignKey: "partnerLogisticId"});
  SalesOrderItem.belongsTo(PartnerLogistic, { as: "partnerLogistic", foreignKey: "partnerLogisticId"});
  PartnerLogistic.hasMany(SalesOrderItem, { as: "SalesOrderItems", foreignKey: "partnerLogisticId"});
  BAST.belongsTo(PurchaseOrder, { as: "po", foreignKey: "poId"});
  PurchaseOrder.hasMany(BAST, { as: "BASTs", foreignKey: "poId"});
  DeliveryOrder.belongsTo(PurchaseOrder, { as: "po", foreignKey: "poId"});
  PurchaseOrder.hasMany(DeliveryOrder, { as: "DeliveryOrders", foreignKey: "poId"});
  LoadingOrder.belongsTo(PurchaseOrder, { as: "po", foreignKey: "poId"});
  PurchaseOrder.hasMany(LoadingOrder, { as: "LoadingOrders", foreignKey: "poId"});
  PurchaseOrderItem.belongsTo(PurchaseOrder, { as: "po", foreignKey: "poId"});
  PurchaseOrder.hasMany(PurchaseOrderItem, { as: "PurchaseOrderItems", foreignKey: "poId"});
  SalesOrder.belongsTo(PurchaseOrder, { as: "po", foreignKey: "poId"});
  PurchaseOrder.hasMany(SalesOrder, { as: "SalesOrders", foreignKey: "poId"});
  SalesOrderItem.belongsTo(PurchaseOrderItem, { as: "poItem", foreignKey: "poItemId"});
  PurchaseOrderItem.hasMany(SalesOrderItem, { as: "SalesOrderItems", foreignKey: "poItemId"});
  CustomerBranch.belongsTo(Regions, { as: "region", foreignKey: "regionId"});
  Regions.hasMany(CustomerBranch, { as: "CustomerBranches", foreignKey: "regionId"});
  SalesOrderItem.belongsTo(SalesOrder, { as: "so", foreignKey: "soId"});
  SalesOrder.hasMany(SalesOrderItem, { as: "SalesOrderItems", foreignKey: "soId"});
  BAST.belongsTo(SalesOrderItem, { as: "soItem", foreignKey: "soItemId"});
  SalesOrderItem.hasMany(BAST, { as: "BASTs", foreignKey: "soItemId"});
  DeliveryOrder.belongsTo(SalesOrderItem, { as: "soItem", foreignKey: "soItemId"});
  SalesOrderItem.hasMany(DeliveryOrder, { as: "DeliveryOrders", foreignKey: "soItemId"});
  LoadingOrder.belongsTo(SalesOrderItem, { as: "soItem", foreignKey: "soItemId"});
  SalesOrderItem.hasMany(LoadingOrder, { as: "LoadingOrders", foreignKey: "soItemId"});
  SalesOrderItem.belongsTo(Sku, { as: "sku", foreignKey: "skuId"});
  Sku.hasMany(SalesOrderItem, { as: "SalesOrderItems", foreignKey: "skuId"});

  return {
    BAST,
    CustomerBranch,
    Customers,
    DeliveryOrder,
    Driver,
    LoadingOrder,
    PartnerLogistic,
    Prices,
    PurchaseOrder,
    PurchaseOrderItem,
    Regions,
    SalesOrder,
    SalesOrderItem,
    SequelizeData,
    SequelizeMeta,
    Sku,
    Users,
    sessions,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
