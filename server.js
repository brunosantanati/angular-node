const express = require('express');
const path = require('path');
const app = express();

// Getting our POSTS routes
const posts = require('./server/routes/posts');

// Using middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts);

// For all requests return always the index
app.get('*', (req, res) => {
    res.send(path.join(__dirname, 'dist/index.html'))
})

app.listen(4600, (req, res) => {
    console.log('RUNNING');
});