const { Op, Sequelize } = require('sequelize')
const { sequelize } = require('../config/database')
const SalesOrderItem = require('../models/salesOrderItem')
const SalesOrder = require('../models/salesOrder')

class SalesOrderRepository {
  async save(data) {
    const { id } = data

    try {
      let result

      await sequelize.transaction(async (t) => {
        const [content, created] = await SalesOrder.findOrCreate({
          where: {
            id,
            poId: data.poId,
          },
          defaults: data,
          transaction: t,
        })

        if (!created) await content.update(data)

        const salesOrderItems = data.items.map((item) => ({
          soId: content.id,
          ...item,
        }))

        await SalesOrderItem.bulkCreate(salesOrderItems, {
          transaction: t,
        })

        result = await SalesOrder.findByPk(content.id, {
          include: [
            {
              model: SalesOrderItem,
            },
          ],
          transaction: t,
        })
      })

      return result.toJSON()
    } catch (error) {
      throw new Error('Failed to save SalesOrder and its SalesOrderItems')
    }
  }
}

module.exports = SalesOrderRepository
