const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// users can make multiple posts
User.hasMany(Post, {
    foreignKey: 'user_id'
}); 

// only 1 owner for a post
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// only 1 owner for a comment
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// only 1 owner for a comment
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// users can make multiple posts
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// users can make multiple posts
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };