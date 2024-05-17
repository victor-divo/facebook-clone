const { Op } = require('sequelize')
const Price = require('../models/price')
const Sku = require('../models/sku')

class PriceRepository {
  async list(offset = 0, limit = 10, conditions = null) {
    const where = {}

    const { name } = conditions

    if (name && name !== '') {
      where.name = {
        [Op.like]: `%${name}%`,
      }
    }

    const criteria = {
      where,
      include: [{ model: Sku }],
      limit,
      offset,
      order: [['id', 'DESC']],
    }

    return await Price.findAndCountAll(criteria)
  }

  async save(data) {
    const { id } = data

    const [content, created] = await Price.findOrCreate({
      where: { id },
      defaults: data,
    })

    if (!created) await content.update(data)

    return content.toJSON()
  }

  async getById(id) {
    return await Price.findOne({
      where: { id },
    })
  }

  async getAll() {
    return await Price.findAll()
  }

  async trash(id) {
    return await Price.destroy({ where: { id } })
  }

  async getActivePrice() {
    try {
      const currentDate = new Date()

      const activePrices = await Price.findAll({
        where: {
          dateStart: {
            [Op.lte]: currentDate,
          },
          dateUntil: {
            [Op.or]: {
              [Op.gte]: currentDate,
              [Op.is]: null,
            },
          },
        },
        order: [
          ['skuId', 'ASC'],
          ['dateStart', 'DESC'],
        ],
      })

      const uniquePrices = []
      const seenSkuIds = new Set()

      for (const price of activePrices) {
        if (!seenSkuIds.has(price.skuId)) {
          uniquePrices.push(price)
          seenSkuIds.add(price.skuId)
        }
      }

      return uniquePrices
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = PriceRepository
