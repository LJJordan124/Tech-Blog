
const {
    User,
    Post,
    Comment
} = require('../models');

const users = [

    {
        username: 'Kaif',
        password: 'SaltRaidersuck'
    },

    {
        username: 'Stan',
        password: 'ilikecookies'
    },

    {
        username: 'Sam',
        password: 'fruitsareprettygood'
    },

    {
        username: 'Lily',
        password: 'shutup'
    },

    {
        username: 'NoBeans',
        password: 'imposterminecraft'
    },

    {
        username: 'Daz',
        password: 'subscribelosers'
    },

]

const posts = [

    {
        title: 'trust me, its an investment',
        content: '*jumps off the edge*',
        user_id: 2
    },

    {
        title: 'you should live',
        content: 'feels good man, I win',
        user_id: 1
    },

    {
        title: 'whos my little pogfrog?',
        content: 'your my little pogfrog',
        user_id: 3
    },

]

const comments = [

    {
        content: 'this is a horrible stream',
        user_id: 4,
        post_id: 1
    },

    {
        content: 'im hungry and sad',
        user_id: 3,
        post_id: 1
    },

]


const plantSeeds = async () => {


    await User.bulkCreate(users, { individualHooks: true });
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);

}

plantSeeds();