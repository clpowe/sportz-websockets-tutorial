import express from 'express';

const app = express();
const PORT = 800;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Sportz API is running.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
