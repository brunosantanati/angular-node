const express = require('express');
const path = require('path');
const app = express();

// Getting our POSTS routes
const routes = require('./server/routes/routes');

// Using middleware
app.use(express.static(path.join(__dirname, 'dist/angular-node')));
app.use('/routes', routes);

// For all requests return always the index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/angular-node/index.html'))
});

const port = process.env.port || 4600
app.listen(port, (req, res) => {
    console.log(`RUNNING on port ${port}`);
});