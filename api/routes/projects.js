import express from 'express';
import Project from '../models/Project.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

// GET all projects (public)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ dateCreated: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects', error: error.message });
  }
});

// POST new project (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const { title, description, technologies, imageUrl, liveLink, githubLink } = req.body;
    
    if (!title || !description || !technologies || !imageUrl) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    const newProject = new Project({
      title,
      description,
      technologies,
      imageUrl,
      liveLink,
      githubLink
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error: error.message });
  }
});

// PUT update project (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const { title, description, technologies, imageUrl, liveLink, githubLink } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, technologies, imageUrl, liveLink, githubLink },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error: error.message });
  }
});

// DELETE project (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
});

export default router;
