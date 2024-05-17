const BastRepository = require('../repository/bastRepository')

const BastRepo = new BastRepository()

exports.bulkInsert = async (data) => {
  return await BastRepo.bulkInsert(data)
}

exports.countSoItemId = async (soItemId) => {
  return await BastRepo.countSoItemId(soItemId)
}
