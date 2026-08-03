const express = require('express');
const app = express();
const port = 3000;

//bhut types k view engine hote h like ejs, pug, handlebars etc
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "adidas";
    let searchbar = "Search now";
    res.render('index', { sitename: sitename, searchbar: searchbar });
});

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "adidas shoes";
    let blogcontent = "good brand & shoes"
    res.render('blogpost', { blogtitle: blogtitle, blogcontent: blogcontent });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});