const DeliveryOrder = require('../models/deliveryOrder')

class DeliveryOrderRepository {
  async bulkInsert(data) {
    return DeliveryOrder.bulkCreate(data)
  }

  async countSoItemId(soItemId) {
    return DeliveryOrder.count({
      where: { soItemId },
    })
  }
}

module.exports = DeliveryOrderRepository
