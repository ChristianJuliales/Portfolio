import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  role: { type: String, required: true },
  institution: { type: String, required: true },
  duration: { type: String, required: true },
  desc: { type: String, required: true }
});

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true }
});

const SkillGroupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  skills: { type: [SkillSchema], required: true }
});

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
  url: { type: String, required: true }
});

const ResumeSchema = new mongoose.Schema({
  education: { type: [EducationSchema], default: [] },
  skillGroups: { type: [SkillGroupSchema], default: [] },
  contacts: { type: [ContactSchema], default: [] }
});

export default mongoose.model('Resume', ResumeSchema);
