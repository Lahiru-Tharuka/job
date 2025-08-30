import express from 'express';
import cors from 'cors';
import { db, init } from './db.js';

init();

const app = express();
app.use(cors());
app.use(express.json());

// Seed some jobs if table empty
const seedJobs = () => {
  db.get('SELECT COUNT(*) as count FROM jobs', (err, row) => {
    if (row && row.count === 0) {
      const stmt = db.prepare('INSERT INTO jobs (title, companyName, location, salary, jobPostedOn, hiringMultipleCandidates, niche) VALUES (?, ?, ?, ?, ?, ?, ?)');
      const now = new Date().toISOString();
      stmt.run('Frontend Developer', 'TechCorp', 'Colombo', 150000, now, 'Yes', 'Web Development');
      stmt.run('Backend Engineer', 'CodeWorks', 'Kandy', 140000, now, 'No', 'Software Development');
      stmt.run('Cloud Architect', 'SkyNet', 'Galle', 180000, now, 'Yes', 'Cloud Computing');
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
