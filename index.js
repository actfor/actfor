const express = require('express');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
const app = express();

// enable ssl redirect
app.use(sslRedirect());

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

app.listen(port, () => {
  console.log('Act for Humanity!');
});