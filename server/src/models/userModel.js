import db from '../config/database.js';

const createUser = async (googleId, displayName, email) => {
  const result = await db.query(
    `INSERT INTO users (google_id, display_name, email) VALUES ($1, $2, $3) RETURNING *`,
    [googleId, displayName, email]
  );
  return result.rows[0];
};

const findUserByGoogleId = async (googleId) => {
  const result = await db.query("SELECT * FROM users WHERE google_id = $1", [googleId]);
  return result.rows[0];
};

const findUserById = async (id) => {
  const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

export { createUser, findUserByGoogleId, findUserById };
