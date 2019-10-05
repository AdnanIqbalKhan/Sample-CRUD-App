const express = require('express');
const cors = require('cors');

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/index.routes')(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});