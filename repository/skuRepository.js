const Sku = require('../models/sku')

class SkuRepository {
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
      limit,
      offset,
      order: [['id', 'DESC']],
    }

    return await Sku.findAndCountAll(criteria)
  }

  async save(data) {
    const { id } = data

    const [content, created] = await Sku.findOrCreate({
      where: {
        id,
      },
      defaults: data,
    })

    if (!created) await content.update(data)

    return content.toJSON()
  }

  async getById(id) {
    return await Sku.findOne({
      where: { id },
    })
  }

  async getAll() {
    return await Sku.findAll()
  }

  async trash(id) {
    return await Sku.destroy({ where: { id } })
  }
}

module.exports = SkuRepository
