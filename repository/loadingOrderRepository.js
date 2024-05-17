const LoadingOrder = require('../models/loadingOrder')

class LoadingOrderRepository {
  async bulkInsert(data) {
    return LoadingOrder.bulkCreate(data)
  }

  async countSoItemId(soItemId) {
    return LoadingOrder.count({
      where: { soItemId },
    })
  }
}

module.exports = LoadingOrderRepository
