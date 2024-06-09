import dotenv from 'dotenv';
import app from './src/app.js';

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
