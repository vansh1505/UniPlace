# 🎓 UniPlace — Smart Campus Placement Management System

UniPlace is a full-stack, enterprise-grade platform built to modernize the campus placement process for students, placement cells, and recruiters. It streamlines eligibility filtering, drive management, resume uploads, shortlisting, and attendance — all in one unified system designed for real-world university needs.

---

## 🚀 Key Features

- 🔐 Secure login/signup with JWT + HttpOnly cookies  
- 📋 Smart eligibility filtering based on CGPA, backlogs, and other criteria  
- 📄 Resume upload and student profile system  
- 🗓️ Centralized dashboard for managing and applying to drives  
- ✅ Recruiter-side shortlisting (coming soon)  
- 📧 Email notifications for selections and updates  
- 🧾 ERP attendance syncing architecture  
- 💻 Fully responsive UI for desktop and mobile  

---

## 🛠 Tech Stack

### Frontend
- **Next.js (App Router)**
- **Tailwind CSS** for utility-first styling  
- **ShadCN UI** for clean components

### Backend
- **Next.js API routes** 
- **MongoDB Atlas** with **Mongoose** for ODM
- **JWT (via `jose`)** for secure token-based auth
- **Secure Cookies** with middleware route protection

### Dev & Deployment
- Deployed on **Vercel**
- `.env.local` for environment config

---

## 📁 Project Structure

```

src/
├── app/                  → Pages & API (App Router)
│   ├── api/auth/         → Signup, login, logout routes
│   ├── dashboard/        → Student dashboard (protected)
│   └── layout.tsx        → Shared layout with Navbar/Footer
├── components/           → UI components
├── lib/                  → DB and auth utilities
├── models/               → Mongoose schemas
middleware.js             → Global auth middleware
public/                   → Static files (logo, favicon)
.env.local                → Environment variables

```

---

## 🔒 Authentication & Middleware

- JWT tokens stored in **HttpOnly cookies**  
- Middleware verifies the token and protects all `/dashboard/*` routes  
- Secure redirect to `/login` on invalid or missing token  

---

## 👨‍💻 About the Creator

**Vansh Sharma**  
B.Tech CSE student, Galgotias University  

I built UniPlace to solve the inefficiencies I personally experienced in the placement process. The goal is to bring automation, clarity, and speed to campus placements using modern full-stack development.

---

## 📌 Status

> ✅ Actively developing.  

---
