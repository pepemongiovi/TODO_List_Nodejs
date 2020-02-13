'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("tasks",
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },
                title: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false
                },
                description: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                status: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                userId: {
                    type: Sequelize.INTEGER,
                    required: true,
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
        await queryInterface.dropTable("tasks");
    }
};