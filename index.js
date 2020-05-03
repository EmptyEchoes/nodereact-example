//common JS modules on server side
const express = require('express');
const app = express();

//route handling
app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT|| 5000;
app.listen(PORT);
