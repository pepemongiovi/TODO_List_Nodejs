'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("users",
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },
                username: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: new Date()
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: new Date()
                },
            }
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("users");
    }
};