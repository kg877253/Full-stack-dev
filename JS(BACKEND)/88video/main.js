const express = require('express');
const app = express()
const port = 3000

//now we can access the files in public folder by searching localhost:3000/kartik.txt
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Helloeeee Wordddld!')
})
//when we will search localhost:3000/about, it will show about page written on it 'about page'
app.get('/about', (req, res) => {
  res.send('About Page')
})
//when we will search localhost:3000/contact, it will show contact page written on it 'contact page'
app.get('/contact', (req, res) => {
  res.send('Contact Page')
})

app.get('/blog', (req, res) => {
  res.send('Blog Page')
})

app.get('/blog/:slug', (req, res) => {//we can add 2 or more parameters like /blog/:slug/:id also 
    //logic to fetch the blog post based on the slug parameter
    //for url:http://localhost:3000/blog/introtopython?mode=dark&region=in
    console.log(req.params)//output-{ slug: 'introtopython' }
    console.log(req.query)//output-{ mode: 'dark', region: 'in' }
  res.send(`Blog Page: ${req.params.slug}`)
})

// app.get('/blog/introtojs', (req, res) => {
//   res.send('Blog Page: Introduction to JavaScript')
// })

// app.get('/blog/introtopython', (req, res) => {
//   res.send('Blog Page: Introduction to Python')
// })

//and if we search anything else like localhost:3000/hello, it will cannot get/hello


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})