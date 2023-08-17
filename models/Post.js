const Sequelize = require('sequelize');
const connection = require('../config/connection');

const Post = connection.define('post', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'User',
            key: 'id'
        }
    }

}, {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'posts',
    underscored: true
});

module.exports = Post;