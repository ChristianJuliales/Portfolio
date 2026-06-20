import express from 'express';
import Resume from '../models/Resume.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

// Default hardcoded resume structure in case the database is empty
const defaultResume = {
  education: [
    {
      role: 'Bachelor of Science in Information Technology',
      institution: 'Quezon City University',
      duration: '2023 - Present',
      desc: 'Focusing on core computing, database administration, software architecture, and modern programming languages.'
    },
    {
      role: 'TVL - Programming Specialist',
      institution: 'San Francisco High School',
      duration: '2021 - 2023',
      desc: 'Secondary TVL track specialized in software logic, covering Visual Basic syntax, object-oriented concepts, and basic scripting.'
    },
    {
      role: 'Junior High School Graduate',
      institution: 'Culiat High School',
      duration: '2017 - 2021',
      desc: 'Completed secondary basic education with focused curriculum in introductory computer applications and technology sciences.'
    }
  ],
  skillGroups: [
    {
      title: 'Programming & Logic',
      skills: [
        { name: 'Java', level: 'Intermediate' },
        { name: 'Visual Basic', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Basic' },
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' }
      ]
    },
    {
      title: 'Creative & Multimedia',
      skills: [
        { name: 'Video Editing', level: 'Advanced' },
        { name: 'CapCut Studio', level: 'Advanced' },
        { name: 'Media Content Creation', level: 'Intermediate' }
      ]
    }
  ],
  contacts: [
    { name: 'Email', value: 'dave.juliales@gmail.com', url: 'mailto:dave.juliales@gmail.com' },
    { name: 'LinkedIn', value: 'Christian Dave Juliales', url: 'https://www.linkedin.com/in/christian-dave-juliales-1b5b7a302/' },
    { name: 'Facebook', value: '@davejuliales.12', url: 'https://www.facebook.com/davejuliales.12' },
    { name: 'Instagram', value: '@davejuliales', url: 'https://www.instagram.com/davejuliales/' }
  ]
};

// GET resume (public)
router.get('/', async (req, res) => {
  try {
    let resume = await Resume.findOne();
    if (!resume) {
      // Seed default resume on first load
      resume = new Resume(defaultResume);
      await resume.save();
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving resume', error: error.message });
  }
});

// PUT update resume (admin only)
router.put('/', adminAuth, async (req, res) => {
  try {
    const { education, skillGroups, contacts } = req.body;

    let resume = await Resume.findOne();
    if (!resume) {
      resume = new Resume({ education, skillGroups, contacts });
    } else {
      resume.education = education;
      resume.skillGroups = skillGroups;
      resume.contacts = contacts;
    }

    const updatedResume = await resume.save();
    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: 'Error updating resume', error: error.message });
  }
});

export default router;
