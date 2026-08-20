const express = require('express');
const app = express();
const port = 3000;

//bhut types k view engine hote h like ejs, pug, handlebars etc
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let dublicate = "kuprat";
    let searchbar = "Search now";
    
    res.render('index', { sitename: dublicate, searchbar: searchbar });
});

app.get('/blog/:slug', (req, res) => {
    let slugtitle = req.params.slug;
    let slugcontent = "good brand & shoes"

    res.render('blogpost', { blogtitle: slugtitle, blogcontent: slugcontent });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});