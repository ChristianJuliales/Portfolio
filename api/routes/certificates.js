import express from 'express';
import Certificate from '../models/Certificate.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

// GET all certificates (public)
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving certificates', error: error.message });
  }
});

// POST new certificate (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const { title, issuer, dateIssued, imageUrl, certificateLink } = req.body;
    
    if (!title || !issuer || !dateIssued) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    const newCertificate = new Certificate({
      title,
      issuer,
      dateIssued,
      imageUrl,
      certificateLink
    });

    const savedCertificate = await newCertificate.save();
    res.status(201).json(savedCertificate);
  } catch (error) {
    res.status(500).json({ message: 'Error creating certificate', error: error.message });
  }
});

// PUT update certificate (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const { title, issuer, dateIssued, imageUrl, certificateLink } = req.body;

    const updatedCertificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      { title, issuer, dateIssued, imageUrl, certificateLink },
      { new: true, runValidators: true }
    );

    if (!updatedCertificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.json(updatedCertificate);
  } catch (error) {
    res.status(500).json({ message: 'Error updating certificate', error: error.message });
  }
});

// DELETE certificate (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const deletedCertificate = await Certificate.findByIdAndDelete(req.params.id);
    
    if (!deletedCertificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting certificate', error: error.message });
  }
});

export default router;
