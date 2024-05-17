const Bast = require('../models/bast')

class BastRepository {
  async bulkInsert(data) {
    return Bast.bulkCreate(data)
  }

  async countSoItemId(soItemId) {
    return Bast.count({
      where: { soItemId },
    })
  }
}

module.exports = BastRepository
