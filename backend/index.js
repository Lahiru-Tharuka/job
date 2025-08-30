import express from 'express';
import cors from 'cors';
import { db, init } from './db.js';

init();

const app = express();
app.use(cors());
app.use(express.json());

// Seed 100 different jobs if table empty
const seedJobs = () => {
  db.get('SELECT COUNT(*) as count FROM jobs', (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare(
        'INSERT INTO jobs (title, companyName, location, salary, jobPostedOn, hiringMultipleCandidates, niche) VALUES (?, ?, ?, ?, ?, ?, ?)'
      );
      const now = new Date().toISOString();

      const roles = [
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'UX Designer',
        'QA Engineer',
        'DevOps Engineer',
        'System Administrator',
        'Database Administrator',
        'Network Engineer',
        'Security Analyst',
        'Technical Writer',
        'Business Analyst',
        'Scrum Master',
        'Graphic Designer',
        'Web Developer',
        'Mobile Developer',
        'AI Researcher',
        'Machine Learning Engineer',
        'Cloud Architect',
        'IT Support Specialist'
      ];
      const levels = ['Intern', 'Junior', 'Mid-level', 'Senior', 'Lead'];
      const companies = [
        'TechCorp',
        'CodeWorks',
        'SkyNet',
        'CloudNine',
        'InnovateX',
        'DataMinds',
        'NextGen',
        'DevMasters',
        'AlphaBeta',
        'QuantumSoft'
      ];
      const locations = [
        'Colombo',
        'Kandy',
        'Galle',
        'Jaffna',
        'Negombo',
        'Matara',
        'Kurunegala',
        'Batticaloa',
        'Anuradhapura',
        'Trincomalee'
      ];

      roles.forEach((role, i) => {
        levels.forEach((level, j) => {
          const title = `${level} ${role}`;
          const company = companies[(i + j) % companies.length];
          const location = locations[(i * levels.length + j) % locations.length];
          const salary = 50000 + ((i * levels.length + j) * 1000);
          const hiring = (i + j) % 2 === 0 ? 'Yes' : 'No';
          const niche = role;
          stmt.run(title, company, location, salary, now, hiring, niche);
        });
      });
      stmt.finalize();
    }
  });
};
seedJobs();

app.get('/jobs', (req, res) => {
  db.all('SELECT * FROM jobs', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/register', (req, res) => {
  const { email, password, role } = req.body;
  const stmt = db.prepare('INSERT INTO users (email, password, role) VALUES (?, ?, ?)');
  stmt.run(email, password, role, function(err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID, email, role });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT email, role FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(401).json({ error: 'Invalid credentials' });
    res.json(row);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
