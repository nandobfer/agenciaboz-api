const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('oi')
})

// sub-routes
const login = require('./login');
router.use('/login', login);

const delete_member = require('./delete_member');
router.use('/delete_member', delete_member);

const get_content = require('./get_content');
router.use('/get_content', get_content);

const get_category = require('./get_category');
router.use('/get_category', get_category);

module.exports = router;