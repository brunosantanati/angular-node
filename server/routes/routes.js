const express = require('express');
const router = express.Router();
const axios = require('axios');

const postAPI = 'https://jsonplaceholder.typicode.com';

// GET POST
router.get('/', (req, res) => {
    res.send('it works');
});

router.get('/posts', (req, res) => {
    
    //res.send('POST WORKS');

    axios.get(`${postAPI}/posts`).then(posts => {

        res.status(200).json(posts.data);

    }).catch(error => {
        res.status(500).send(error);
    })

});

module.exports = router;