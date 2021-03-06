const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('RoboRun1'));

app.get('*', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
