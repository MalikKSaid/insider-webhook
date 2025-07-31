const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET endpoint
app.get('/webhook', (req, res) => {
  res.status(200).send('GET webhook working!');
});

// POST endpoint
app.post('/webhook', (req, res) => {
  console.log('Received POST:', req.body);
  res.status(200).send({ message: 'POST webhook received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
