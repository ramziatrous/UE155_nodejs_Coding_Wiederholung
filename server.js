const express = require('express');

const app = express();
const PORT = 3000;


const service = require('./routes/services');
app.use('/services', service) ;

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
