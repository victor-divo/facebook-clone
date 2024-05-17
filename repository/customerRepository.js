const Customer = require('../models/customer')

class CustomerRepository {
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

    return await Customer.findAndCountAll(criteria)
  }

  async save(data) {
    const { id } = data

    const [content, created] = await Customer.findOrCreate({
      where: {
        id,
      },
      defaults: data,
    })

    if (!created) await content.update(data)

    return content.toJSON()
  }

  async getById(id) {
    return await Customer.findOne({
      where: { id },
    })
  }

  async getAll() {
    return await Customer.findAll()
  }

  async trash(id) {
    return await Customer.destroy({ where: { id } })
  }
}

module.exports = CustomerRepository
