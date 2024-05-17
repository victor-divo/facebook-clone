const PartnerLogistic = require('../models/partnerLogistic')
const {
  Op
} = require('sequelize')

class PartnerLogisticRepository {
  async list(offset = 0, limit = 10, conditions = null) {
    const where = {}

    const {
      name
    } = conditions

    if (name && name !== '') {
      where.name = {
        [Op.like]: `%${name}%`,
      }
    }

    const criteria = {
      where,
      limit,
      offset,
      order: [
        ['id', 'DESC']
      ],
    }

    return await PartnerLogistic.findAndCountAll(criteria)
  }

  async save(data) {
    const {
      id
    } = data

    const [content, created] = await PartnerLogistic.findOrCreate({
      where: {
        id,
      },
      defaults: data,
    })

    if (!created) await content.update(data)

    return content.toJSON()
  }

  async getById(id) {
    return await PartnerLogistic.findOne({
      where: {
        id
      },
    })
  }

  async trash(id) {
    return await PartnerLogistic.destroy({
      where: {
        id
      }
    })
  }

  async getAll() {
    return await PartnerLogistic.findAll()
  }
}

module.exports = PartnerLogisticRepository