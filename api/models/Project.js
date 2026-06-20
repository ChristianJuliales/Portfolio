import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  liveLink: { type: String, default: '' },
  githubLink: { type: String, default: '' },
  dateCreated: { type: Date, default: Date.now }
});

export default mongoose.model('Project', ProjectSchema);
