# UniPlace 🎓 — Modern Campus Placement Management Platform

[![License](https://img.shields.io/github/license/vansh1505/uniplace)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-blue.svg)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green.svg)](https://mongodb.com)
[![Deployment](https://img.shields.io/badge/Deployed-Vercel-black.svg)](https://uniplace.vercel.app)

UniPlace is a full-stack SaaS-style web application built to streamline the **end-to-end campus placement workflow** at Galgotias University. It connects **students, the CCPD placement cell, and companies** through one unified interface—automating eligibility checks, applications, shortlisting, attendance, and result management.

> 🚀 [Live Demo](https://uniplace.vercel.app)

---

## 📌 Table of Contents

- [Key Features](#key-features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)

---

## ✅ Key Features

### 🎓 Student Dashboard
- Auto-filtered placement drives based on eligibility (CGPA, backlogs, branch, etc.)
- Application system with resume & SOP uploads
- Past drive history & status updates

### 🏢 Company Dashboard
- Register drives with custom eligibility filters
- View applicants and shortlist candidates
- Upload results post exam/interviews

### 🏛️ CCPD/Admin Panel
- Central control over student & company data
- Attendance syncing with ERP system
- Notifications & audit-ready reports

### 🔐 Authentication & Access Control
- JWT-based role-based auth middleware (Admin / Student / Company)
- Secure login/signup flows

---

## ⚙️ Architecture

```txt
Frontend (Next.js App Router) <-> API Routes (REST) <-> MongoDB
                             |
                             --> UploadThing (resume uploads)
                             --> Email Service (SMTP / Resend)
                             --> Protected Middleware (Auth & RBAC)
````

---

## 💻 Tech Stack

| Layer       | Tech                                              |
| ----------- | ------------------------------------------------- |
| Frontend    | Next.js 14 (App Router) + TailwindCSS + ShadCN/UI |
| Backend     | Node.js, Next API Routes                          |
| Database    | MongoDB (Mongoose ODM)                            |
| File Upload | UploadThing                                       |
| Auth        | Custom JWT auth (no Clerk/Auth0)                  |
| Deployment  | Vercel                                            |


## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/uniplace.git
cd uniplace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up `.env.local`

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
UPLOADTHING_SECRET=your_uploadthing_key
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

### 4. Run the Dev Server

```bash
npm run dev
```

App will be available at `http://localhost:3000`

---

## 📁 Folder Structure (Simplified)

```bash
src/
├── app/                  → Pages & API routes (App Router)
│   ├── api/auth/         → Endpoints for signup, login, logout
│   ├── dashboard/        → Protected student/admin dashboards
│   └── layout.tsx        → Shared layout with Navbar/Footer
├── components/           → Reusable UI components
├── lib/                  → Database and auth utilities
├── models/               → Mongoose schemas for users, drives
middleware.js             → Global auth middleware
public/                   → Static assets (logo, favicon)
.env.local                → Environment variables
```

## 📬 Contact
Questions or feedback? Reach out at [linkedin](https://www.linkedin.com/in/vansh1505/).

## 📜 License

This project is licensed under the MIT License

---

## 🤝 Acknowledgements

Built with ❤️ by [Vansh](https://github.com/vansh1505)