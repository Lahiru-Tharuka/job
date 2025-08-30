import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'jobs.db');
const db = new sqlite3.Database(dbPath);

// Initialize tables
const init = () => {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      companyName TEXT NOT NULL,
      location TEXT NOT NULL,
      salary INTEGER,
      jobPostedOn TEXT,
      hiringMultipleCandidates TEXT,
      niche TEXT
    );`);

    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT
    );`);
  });
};

export { db, init };
