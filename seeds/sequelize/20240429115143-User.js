"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    //  await queryInterface.bulkInsert('Users', [{
    //   name: 'Administrator',
    //   username: 'admin',
    //   password: '$2a$10$y5sD6YYFm3FLWpGRV1ldsO2J.sVLfYH.mrI6BI884DKpWexxOh2p.',
    //  }])

    // Password: password
    await queryInterface.bulkInsert("Users", [
      {
        name: "Patra Logistik Lokal 1",
        username: "patlog_local1",
        role: "patlog_local",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Patra Logistik Lokal 2",
        username: "patlog_local2",
        role: "patlog_local",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Patlog Semarang",
        username: "patlog_semarang",
        role: "patlog_local",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Patra Logistik Admin 1",
        username: "patlog_admin1",
        role: "patlog_admin",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Patra Logistik Admin 2",
        username: "patlog_admin2",
        role: "patlog_admin",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Management 1",
        username: "management1",
        role: "management",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Management 2",
        username: "management2",
        role: "management",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Transportir 1",
        username: "transportir1",
        role: "transportir",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
      {
        name: "Transportir 2",
        username: "transportir2",
        role: "transportir",
        password: "$2a$10$ywAOQMhBKa4odp2xYcABl.W0D3NYkpMwHUMMd3mrgQwDedx5dToRu",
      },
    ])
  },

  async down(queryInterface, Sequelize) {

  },
}
