const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, function() {
  `Your server is listening on port ${ port }.`;
});
