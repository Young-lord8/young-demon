const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    // created by 𒀱ꪳ𓃠༒𝖄𝖔𝖚𝖓𝖞 𝕷𝖔𝖗𝖉༒𓃠𒀱ꪳ𓃭𓃭
    const response = await generateChatResponse(message);

    res.json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function generateChatResponse(message) {
  // Your bot logic goes here
  // For example,only premium users can use this cmd
  return 'Hello! I am a bot.';
}