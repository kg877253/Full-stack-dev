const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log("get request received");
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log("post request receivedddd");
  res.send('Hello World post thiing ');
});

app.put('/', (req, res) => {
  console.log("put request receivedddd");
  res.send('Hello World put thiing ');
});

app.delete('/', (req, res) => {
  console.log("delete request receivedddd");
  res.send('Hello World delete thiing ');
});

//it will send the index.html file when the user visits the /index route
app.get('/index', (req, res) => {
  console.log("get request received");
  res.sendFile('templates/index.html', { root: __dirname });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});