import express from 'express';
import authRoutes from './authRoutes.js';
import ensureAuthenticated from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authRoutes);

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user });
});

export default router;
