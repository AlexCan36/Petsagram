const { Post } = require('../models');

const postdata = [
    {
        caption: 'Caption BABAY!',
        image: 'https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-260nw-1048123303.jpg',
        user_id: 1
    },
    {
        caption: 'Caption BABAY!',
        image: 'https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-260nw-1048123303.jpg',
        user_id: 1
    },
    {
        caption: 'Caption BABAY!',
        image: 'https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-260nw-1048123303.jpg',
        user_id: 3
    },
    {
        caption: 'Caption BABAY!',
        image: 'https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-260nw-1048123303.jpg',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
