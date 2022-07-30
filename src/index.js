const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('🐋 docker test');
});

const port = process.env.PORT ?? 9000;

app.listen(port, () => console.log(`app listening on port ${port}`));
