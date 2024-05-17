const Customer = require('../models/customer')
const CustomerBranch = require('../models/customerBranch')
const Region = require('../models/region')

class CustomerBranchRepository {
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
      include: [
        { model: Customer, attributes: ['id', 'name'], as: 'customer' },
        { model: Region, attributes: ['id', 'name'], as: 'region' }
      ],
    }

    return await CustomerBranch.findAndCountAll(criteria)
  }

  async save(data) {
    const { id } = data

    const [content, created] = await CustomerBranch.findOrCreate({
      where: {
        id,
      },
      defaults: data,
    })

    if (!created) await content.update(data)

    return content.toJSON()
  }

  async getById(id) {
    return await CustomerBranch.findOne({
      where: { id },
    })
  }

  async trash(id) {
    return await CustomerBranch.destroy({ where: { id } })
  }

  async getAll() {
    try {
      return await CustomerBranch.findAll()
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = CustomerBranchRepository
