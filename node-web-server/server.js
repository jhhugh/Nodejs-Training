const express = require('express');

var app = express();


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Jimmy',
        likes: [
            'Gaming',
            'Boxing'
        ]
    });
});

app.get('/about',(req,res) => {
    res.send('About Page');
});

app.get('/bad',(req,res) => {
    res.send({
        error: 'Bad request'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000...')
});