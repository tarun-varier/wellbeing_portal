import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const connectDB = async () => {
  try {
    await db.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

connectDB();

export default db;
