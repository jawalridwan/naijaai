require('dotenv').config();
const express = require('express');
const chatRoute = require('./routes/chat');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('NaijaAI Backend is running');
});

app.use('/api/chat', chatRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 