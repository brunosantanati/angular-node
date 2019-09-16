const express = require('express');
const router = express.Router();
const axios = require('axios');

const postAPI = 'https://jsonplaceholder.typicode.com';

// GET POST
router.get('/', (req, res) => {
    
    //res.send('POST WORKS');

    axios.get(`${postAPI}/posts`).then(posts => {
        console.log(posts.data);
    });

});

module.exports = router;