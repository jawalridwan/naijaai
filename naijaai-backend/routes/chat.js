const express = require('express');
const axios = require('axios');
const router = express.Router();

// This is a placeholder for handling chat messages
router.post('/', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: message,
      max_tokens: 150,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    res.json({ response: response.data.choices[0].text });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({ error: 'Error communicating with OpenAI' });
  }
});

module.exports = router; 