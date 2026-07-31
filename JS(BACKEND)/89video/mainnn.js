const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log("get request received");
  res.send('Hello World!');
});
app.post('/', (req, res) => {
  console.log("post request received");
  res.send('Hello World post thiing ');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});