const Sequelize = require('sequelize');
const connection = require('../config/connection');

const Comment = connection.define('comment', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'Post',
            key: 'id'
        }
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
    modelName: 'comments',
    underscored: true
});

module.exports = Comment;