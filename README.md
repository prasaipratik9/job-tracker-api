# 🎯 Job Tracker API

Backend REST API for Job Tracker - a full-stack MERN application for managing job applications with user authentication.

> **Status:** 🚧 In Development  
> **Started:** November 16, 2025  
> **Expected Completion:** December 20, 2025

---

## 📋 Project Overview

Job Tracker API provides secure endpoints for managing job applications, including user authentication, CRUD operations, and filtering capabilities.

**Part of a full-stack project:**
- **Backend (this repo):** Node.js + Express + MongoDB
- **Frontend:** React + Tailwind CSS (coming soon)

---

## ✨ Features

### Phase 1 (MVP) - In Progress
- [ ] User authentication (register, login, JWT)
- [ ] Protected routes with middleware
- [ ] CRUD operations for job applications
- [ ] Filter jobs by status
- [ ] Link jobs to authenticated users

### Phase 2 (Planned)
- [ ] Add contacts per job
- [ ] Interview notes
- [ ] Sort by date
- [ ] Search by company name

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **Environment:** dotenv
- **Testing:** Postman

---

## 📁 Project Structure
```
job-tracker-api/
├── server.js           # Entry point
├── routes/            # API endpoints
│   ├── auth.js       # Authentication routes
│   └── jobs.js       # Job CRUD routes
├── models/           # Mongoose schemas
│   ├── User.js       # User model
│   └── Job.js        # Job application model
├── middleware/       # Custom middleware
│   └── auth.js       # JWT verification
├── .env              # Environment variables (not in repo)
├── .gitignore        # Git ignore rules
└── package.json      # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Postman (for API testing)

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/job-tracker-api.git

# Navigate to project
cd job-tracker-api

# Install dependencies
npm install

# Create .env file (see Environment Variables section)

# Start development server
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key
NODE_ENV=development
```

---

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register    # Create new user account
POST   /api/auth/login        # Login user, receive JWT
```

### Jobs (Protected Routes)
```
GET    /api/jobs             # Get all jobs for authenticated user
POST   /api/jobs             # Create new job application
GET    /api/jobs/:id         # Get specific job by ID
PATCH  /api/jobs/:id         # Update job application
DELETE /api/jobs/:id         # Delete job application
```

---

## 📚 Learning Goals

This project demonstrates:
- RESTful API design principles
- User authentication with JWT
- MongoDB data modeling and relationships
- Express middleware patterns
- Secure password hashing
- Error handling best practices
- Environment variable management

---


## 🤝 Contributing

This is a personal learning project. Feedback and suggestions are welcome via issues!

---



## 📄 License

This project is open source and available under the MIT License.