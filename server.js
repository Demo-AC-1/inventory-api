const express = require('express');
const app = express();

app.get('/go', (req, res) => {
  res.redirect(req.query.next);
});

app.get('/item', (req, res) => {
  res.send('<div>Item ' + req.query.name + '</div>');
});

app.listen(3000);
