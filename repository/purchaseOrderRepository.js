const {
  Op
} = require('sequelize')
const {
  sequelize
} = require('../config/database')
const PurchaseOrder = require('../models/purchaseOrder')
const PurchaseOrderItem = require('../models/purchaseOrderItem')
const SalesOrder = require('../models/salesOrder')
const SalesOrderItem = require('../models/salesOrderItem')
const User = require('../models/user')
const PartnerLogistic = require('../models/partnerLogistic')
const LoadingOrder = require('../models/loadingOrder')
const DeliveryOrder = require('../models/deliveryOrder')
const BAST = require('../models/bast')
const CustomerBranch = require('../models/customerBranch')
const Sku = require('../models/sku')

class PurchaseOrderRepository {
  async list(offset = 0, limit = 10, conditions = null) {
    const where = {}

    const {
      poNumber
    } = conditions

    if (poNumber && poNumber !== '') {
      where.poNumber = {
        [Op.like]: `%${poNumber}%`,
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

    return await PurchaseOrder.findAndCountAll(criteria)
  }

  async save(data) {
    const {
      id
    } = data

    try {
      let result

      await sequelize.transaction(async (t) => {
        const [content, created] = await PurchaseOrder.findOrCreate({
          where: {
            id,
          },
          defaults: data,
          transaction: t,
        })

        if (!created) await content.update(data)

        const purchaseOrderItems = data.items.map((item) => ({
          poId: content.id,
          ...item,
        }))

        await PurchaseOrderItem.bulkCreate(purchaseOrderItems, {
          transaction: t,
        })

        result = await PurchaseOrder.findByPk(content.id, {
          include: [{
            model: PurchaseOrderItem,
          }, ],
          transaction: t,
        })
      })

      return result.toJSON()
    } catch (error) {
      throw new Error('Failed to save PurchaseOrder and its PurchaseOrderItems')
    }
  }

  async getById(id) {
    return await PurchaseOrder.findOne({
      include: [{
          model: User
        },
        {
          model: PurchaseOrderItem,
          include: [{
            model: Sku
          }],
        },
        {
          model: CustomerBranch
        },
        {
          model: SalesOrder,
          include: [{
            model: SalesOrderItem,
            include: [{
                model: Sku
              },
              {
                model: PartnerLogistic
              },
              {
                model: LoadingOrder
              },
              {
                model: DeliveryOrder
              },
              {
                model: BAST
              },
            ],
          }, ],
        },
      ],
      where: {
        id,
      },
    })
  }

  async trash(id) {
    return await PurchaseOrder.destroy({
      where: {
        id,
      },
    })
  }

  async getAllData() {
    return await PurchaseOrder.findAndCountAll({
      include: [{
          model: CustomerBranch,
        },
        {
          model: PurchaseOrderItem,
        },
        {
          model: User,
        },
      ],
      where: {
        transactionType: 'Franco'
      }
    })
  }
}

module.exports = PurchaseOrderRepository