const express = require('express');
const app = express();
const PORT = 3000;

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/categories', (req,res) => {
    res.send('To be worked on.')
})

app.get('/login', (req,res) => {
    res.send('To be worked on.')
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})