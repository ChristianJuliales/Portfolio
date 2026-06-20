import Project from '../models/Project.js';
import Certificate from '../models/Certificate.js';
import Resume from '../models/Resume.js';

const initialProjects = [
  {
    title: 'MyTalipapa',
    description: 'A comprehensive public market management system designed to streamline stall rentals, track vendor payments, and automate inventory updates for local market administrators.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/favicon.svg',
    liveLink: '',
    githubLink: ''
  },
  {
    title: 'Payroll System',
    description: 'The Payroll System is a comprehensive enterprise solution developed in Visual Basic and powered by a secure local database. It is designed to handle complex salary structures, manage official employee records, compute net pays, and reduce human accounting errors significantly.',
    technologies: ['Visual Basic', 'Database', 'Desktop', 'MS Access'],
    imageUrl: '/Payroll.png',
    liveLink: '',
    githubLink: ''
  },
  {
    title: 'Scientific Calculator',
    description: 'A mathematical desktop application that handles standard arithmetic and complex scientific evaluations (trigonometry, logarithms, exponents, parentheses parsing) with a highly responsive, modern interface.',
    technologies: ['Java', 'Object Oriented', 'Desktop', 'UI Development'],
    imageUrl: '/Calculator.png',
    liveLink: '',
    githubLink: ''
  },
  {
    title: 'Philippine Heritage (Lakbay-Wika)',
    description: 'An educational platform focused on Philippine cultural heritage and linguistic diversity. The project aims to bridge language barriers across regions through translation tools, audio-visual pronunciation guidelines, and interactive historical maps.',
    technologies: ['HTML/CSS', 'Web Platform', 'JavaScript', 'Responsive Web'],
    imageUrl: '/Lakbay-Wika.png',
    liveLink: '',
    githubLink: ''
  }
];

const initialCertificates = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    dateIssued: '2025',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  },
  {
    title: 'Java Foundations Certified Associate',
    issuer: 'Oracle Academy',
    dateIssued: '2023',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    dateIssued: '2023',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    dateIssued: '2024',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  },
  {
    title: 'TVL - Programming Academic Excellence',
    issuer: 'San Francisco High School',
    dateIssued: '2023',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  }
];

const initialResume = {
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

export async function seedDatabase() {
  try {
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(initialProjects);
      console.log('Seeded projects collection successfully');
    }

    const certCount = await Certificate.countDocuments();
    if (certCount === 0) {
      await Certificate.insertMany(initialCertificates);
      console.log('Seeded certificates collection successfully');
    }

    const resumeCount = await Resume.countDocuments();
    if (resumeCount === 0) {
      const resume = new Resume(initialResume);
      await resume.save();
      console.log('Seeded resume collection successfully');
    }
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
}
