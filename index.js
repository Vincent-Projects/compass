const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3000;


const server = express();

server.set('views', 'src/views');
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Compass - Vincent'
    });
});

server.listen(PORT);