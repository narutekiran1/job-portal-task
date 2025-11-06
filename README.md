<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->


# 🎯 Job Portal Task (React Only)

This is a front-end job portal application built entirely using **React** (without Node.js, Express, or MongoDB).  
It allows candidates to fill out a job application form, record a short video introduction, and review their details before submission.

---

## 🚀 Features

### 1️⃣ Candidate Information Form
- Collects:
  - First Name & Last Name
  - Position Applied For (dropdown: Developer, Tester, UI/UX, etc.)
  - Current Position
  - Experience in Years
  - Upload Resume (PDF ≤ 5 MB)
- Validates all fields before proceeding.

### 2️⃣ Video Recording
- Provides clear video instructions.
- Allows users to record a short introduction video (≤ 90 seconds).
- Shows live preview, timer, and start/stop controls.
- Validates duration and prevents over-limit videos.

### 3️⃣ Review & Submit
- Displays all entered details for final review.
- Shows uploaded resume with download link.
- Plays recorded video in a video player.

---

## 🧩 Tech Stack

- **React** (Vite)
- **HTML5 Video API**
- **Lucide React Icons**
- **CSS3 (Custom Styling)**
- **JavaScript (Hooks & State Management)**

---



