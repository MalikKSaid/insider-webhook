const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET endpoint
app.get('/', (req, res) => {
  res.send('GET Webhook working!');
});

// POST endpoint
app.post('/', (req, res) => {
  console.log('POST received:', req.body);
  res.send('POST Webhook received!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
