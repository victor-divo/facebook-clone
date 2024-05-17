const Region = require('../models/region')

class RegionRepository {
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
            order: [['id', 'DESC']]
        }

        return await Region.findAndCountAll(criteria)
    }

    async save(data) {
        const { id } = data

        const [content, created] = await Region.findOrCreate({
            where: {
                id,
            },
            defaults: data,
        })

        if (!created) await content.update(data)

        return content.toJSON()
    }

    async getById(id) {
        return await Region.findOne({
            where: { id }
        })
    }

    async getAll() {
        return await Region.findAll()
    }

    async trash(id) {
        return await Region.destroy({ where: { id } })
    }
}

module.exports = RegionRepository