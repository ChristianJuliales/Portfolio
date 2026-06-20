import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  dateIssued: { type: String, required: true },
  imageUrl: { type: String, default: '' },
  certificateLink: { type: String, default: '' }
});

export default mongoose.model('Certificate', CertificateSchema);
