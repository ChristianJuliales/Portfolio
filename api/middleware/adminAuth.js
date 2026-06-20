import dotenv from 'dotenv';
dotenv.config();

export default function adminAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized. Missing API key.' });
    }

    const key = authHeader.split(' ')[1];
    const systemKey = process.env.ADMIN_API_KEY || 'admin-key-2026';

    if (key !== systemKey) {
      return res.status(401).json({ message: 'Unauthorized. Invalid API key.' });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'Authentication error', error: error.message });
  }
}
