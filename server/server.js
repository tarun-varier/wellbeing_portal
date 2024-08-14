import express from 'express'
import dotenv from 'dotenv'

import connectToMongoDB from './src/db/connectToMongoDB.js';

import authRoutes from './src/routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth",authRoutes);


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});