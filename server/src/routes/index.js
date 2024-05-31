import { Router } from 'express';

const router = Router();

// Dummy login endpoint
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Implement actual authentication logic here
    if (email === 'test@iiitkottayam.ac.in' && password === 'password') {
        return res.json({ message: 'Login successful' });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});
 
export default router;
