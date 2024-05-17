const datatable = (data) => {
    const count = data.count

    return {
        recordsTotal: count,
        recordsFiltered: count,
        data: data.rows
    }
}

module.exports = datatable