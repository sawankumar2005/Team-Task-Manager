# Team Task Manager

A full-stack Team Task Management application built using the MERN Stack. This application helps teams manage projects, assign tasks, track progress, and monitor productivity through a centralized dashboard.

## Live Application

Frontend URL:
https://team-task-manager-beta-olive.vercel.app/

Backend URL:
https://team-task-manager-production-ffa0.up.railway.app

## GitHub Repository

https://github.com/sawankumar2005/Team-Task-Manager

## Features

- User Registration and Login
- JWT Authentication
- Role-Based Access Control (Admin / Member)
- Project Management
- Task Creation and Assignment
- Task Status Tracking
- Dashboard Analytics
- Protected Routes
- MongoDB Database Integration
- RESTful API Architecture

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Deployment
- Frontend: Vercel
- Backend: Railway
- Database: MongoDB Atlas

---

## Project Structure

```text
Team-Task-Manager
│
├── client
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation Guide

### Clone Repository

```bash
git clone https://github.com/sawankumar2005/Team-Task-Manager.git
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Projects

```http
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

### Tasks

```http
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### Dashboard

```http
GET /api/dashboard
```

## Assignment Requirements Covered

### Backend
- REST APIs
- MongoDB Database Integration
- Data Validation
- Authentication & Authorization
- Role-Based Access Control

### Frontend
- React-based User Interface
- Login & Registration
- Dashboard
- Project Management
- Task Management

### Deployment
- Railway Deployment
- Vercel Deployment
- GitHub Repository

## Demo Flow

1. User Registration
2. User Login
3. Create Project
4. Create Task
5. Assign Task
6. Update Task Status
7. View Dashboard Statistics
8. Logout

## Author

**Sawan Kumar Parmar**

B.Tech – Computer Science & Engineering (IoT & Cyber Security Including Blockchain Technology)

Batch: 2026

---

Thank you for reviewing this project.
