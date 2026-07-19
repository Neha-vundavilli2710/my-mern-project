# 🥗 Nutrition Assistant

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) wellness management application. Nutri-Assist helps users track their BMI, manage a personal health profile, plan weekly meals, monitor estimated nutrition intake, and receive personalized diet recommendations — with a role-based admin panel for oversight.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Reference](#api-reference)
- [Usage Guide](#usage-guide)
- [Admin Access](#admin-access)
- [Documentation & Demo](#documentation--demo)
- [Known Limitations / Scope Notes](#known-limitations--scope-notes)
- [Future Improvements](#future-improvements)

---

## Overview

In a world where maintaining a balanced diet is increasingly difficult, Nutri-Assist offers a simple, personalized way to stay on top of your health. Users can register, build a profile, calculate their BMI, plan meals for the week, see an estimate of their nutritional intake, and get tailored diet suggestions — including calorie targets, macronutrient needs, walking recommendations, and meal timing — based on their BMI category.

The application is split into two independently running services:

- **Client** — a React (Vite) single-page application
- **Server** — a Node.js/Express REST API backed by MongoDB

---

## Features

### User-facing
- 🔐 Secure registration & login with hashed passwords and JWT-based sessions
- 🧍 Profile management — age, gender, height, weight, fitness goal, water intake goal
- ⚖️ BMI calculator with automatic category classification and full history
- 🍽️ Weekly meal planner — plan breakfast, lunch, and dinner for each day of the week
- 📊 Nutrition tracker — estimated calories, protein, carbs, and fat based on the actual meals planned for the day, using a built-in food lookup database
- 🥗 Diet recommendations — recommended and foods-to-avoid lists based on BMI category
- 🎯 Detailed diet suggestions — generated calorie intake, protein/carb targets, walking distance, and meal timing, saved to the user's history
- 📅 History view — combined BMI and meal plan history over time

### Admin-facing
- 🛡️ Role-based access control (`user` / `admin`)
- 📋 Admin panel listing every user's generated suggestions (email, age, height, weight, BMI)
- 🗑️ Ability to delete any suggestion record

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 (Vite), React Router DOM, Axios, Bootstrap, React Icons |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose ODM |
| Auth | JSON Web Tokens (JWT), bcrypt for password hashing |
| Dev Tools | Nodemon, dotenv, ESLint |

---

## Architecture

```
User (Browser)
      │
      ▼
React Frontend (Vite, port 5173)
      │  Axios + JWT interceptor
      ▼
Express REST API (port 8000)
      │
      ▼
Controllers ──► Mongoose Models ──► MongoDB
```

The backend follows the **MVC pattern**:
- **Model** — Mongoose schemas (`User`, `Profile`, `BMI`, `MealPlan`, `Suggestion`)
- **Controller** — business logic per resource (auth, profile, BMI, meals, history, suggestions)
- **Route (View layer)** — Express routers mapping HTTP endpoints to controllers; middleware (`authMiddleware`, `adminMiddleware`) protects routes based on login state and role.

---

## Project Structure

```
Nutrition Assistant/
├── client/
│   └── src/
│       ├── assets/images/
│       ├── components/
│       │   ├── BMI/
│       │   ├── Dashboard/
│       │   ├── Landing/
│       │   ├── Nutrition/
│       │   ├── Profile/
│       │   ├── Sidebar/
│       │   └── WeeklyPlanner/
│       ├── pages/
│       │   ├── Landing/
│       │   ├── Auth/            (Login, Register)
│       │   ├── Dashboard/
│       │   ├── BMI/
│       │   ├── Nutrition/
│       │   ├── WeeklyPlanner/
│       │   ├── Profile/
│       │   ├── DietRecommendation/
│       │   ├── History/
│       │   └── Admin/
│       ├── routes/AppRoutes.jsx
│       ├── services/api.js       (Axios instance + JWT interceptor)
│       ├── utils/
│       │   ├── foodDatabase.js
│       │   └── calculateNutrition.js
│       ├── App.jsx
│       └── main.jsx
│
└── server/
    ├── controllers/
    │   ├── authController.js
    │   ├── profileController.js
    │   ├── bmiController.js
    │   ├── mealController.js
    │   ├── historyController.js
    │   └── suggestionController.js
    ├── db/config.js
    ├── middlewares/
    │   ├── authMiddleware.js
    │   └── adminMiddleware.js
    ├── models/
    │   ├── User.js
    │   ├── Profile.js
    │   ├── BMI.js
    │   ├── MealPlan.js
    │   └── Suggestion.js
    ├── routes/
    │   ├── authRoute.js
    │   ├── profileRoute.js
    │   ├── bmiRoute.js
    │   ├── mealRoute.js
    │   ├── historyRoute.js
    │   └── suggestionRoute.js
    └── server.js
```

---

## Database Schema

**User**
| Field | Type | Notes |
|---|---|---|
| fullName | String | required |
| email | String | required, unique |
| password | String | required, bcrypt hash |
| role | String | `user` \| `admin`, default `user` |

**Profile**
| Field | Type | Notes |
|---|---|---|
| userId | ObjectId | ref `User`, unique |
| age, height, weight | Number | required |
| gender | String | Male / Female / Other |
| goal | String | required |
| waterGoal | Number | default 3 (litres) |

**BMI**
| Field | Type | Notes |
|---|---|---|
| userId | ObjectId | ref `User`, unique |
| bmi | Number | required |
| category | String | Underweight / Normal Weight / Overweight / Obese |

**MealPlan**
| Field | Type | Notes |
|---|---|---|
| userId | ObjectId | ref `User` |
| Monday…Sunday | Object | `{ breakfast, lunch, dinner }` text fields |

**Suggestion**
| Field | Type | Notes |
|---|---|---|
| userId | ObjectId | ref `User` |
| age, height, weight, bmi, category | Number/String | snapshot at generation time |
| calorieIntake | Number | computed from BMR × activity − adjustment |
| proteinNeeds, carbohydrateNeeds | String | computed ranges |
| timing, walk, suggestion | String | guidance text |

---

## Getting Started

### Prerequisites
- Node.js v16 or above
- npm v8 or above
- MongoDB (local instance or MongoDB Atlas)
- Git

### Clone & Install

```bash
git clone <your-repo-url>
cd "Nutrition Assistant"

# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

---

## Environment Variables

Create a `.env` file inside `server/`:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/Nutrition_Assistant
JWT_SECRET=your-secret-key
```

| Variable | Description |
|---|---|
| `PORT` | Port the Express server runs on |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key used to sign/verify JWTs |

---

## Running the Application

**Backend**
```bash
cd server
npm run dev
```
Runs on `http://localhost:8000`

**Frontend**
```bash
cd client
npm run dev
```
Runs on `http://localhost:5173`

---

## API Reference

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Log in, receive JWT | No |
| GET | `/api/profile` | Get logged-in user's profile | Yes |
| POST | `/api/profile` | Create/upsert profile | Yes |
| PUT | `/api/profile` | Update profile | Yes |
| GET | `/api/bmi` | Get latest BMI record | Yes |
| POST | `/api/bmi` | Save new BMI calculation | Yes |
| GET | `/api/bmi/history` | Get all BMI records | Yes |
| GET | `/api/meals` | Get weekly meal plan | Yes |
| POST | `/api/meals` | Create/upsert weekly meal plan | Yes |
| PUT | `/api/meals` | Update weekly meal plan | Yes |
| DELETE | `/api/meals` | Delete weekly meal plan | Yes |
| GET | `/api/history` | Get combined BMI + meal history | Yes |
| POST | `/api/suggestions` | Generate a new diet suggestion | Yes |
| GET | `/api/suggestions` | Get latest suggestion | Yes |
| GET | `/api/suggestions/all` | Get all users' suggestions | Admin only |
| DELETE | `/api/suggestions/:id` | Delete a suggestion | Admin only |

All authenticated requests require a header:
```
Authorization: Bearer <token>
```

---

## Usage Guide

1. **Register** an account, then **log in**.
2. Complete your **Profile** (age, gender, height, weight, goal).
3. Go to **BMI** and calculate/save your BMI.
4. Visit **Diet Recommendation** to see food suggestions for your BMI category, and click **"Get Detailed Suggestion"** for calorie/macro/walk/timing guidance.
5. Use **Weekly Planner** to plan breakfast, lunch, and dinner for each day.
6. Check **Nutrition** to see today's estimated calorie/protein/carb/fat breakdown, calculated from your planned meals.
7. Review your progress anytime in **History**.

---

## Admin Access

Admin functionality is role-gated. To test it:

1. In MongoDB (Compass or `mongosh`), open the `users` collection and set a test user's `role` field to `"admin"`.
2. Log out and log back in with that account (a fresh token is required to pick up the new role).
3. You'll be redirected to `/admin`, where you can view and delete any user's generated suggestions.

---

## Documentation & Demo

- 📄 **Project Documentation:** [Google Drive Link](https://drive.google.com/drive/folders/128n_U4JoXbtpR_o63NH7pZv_x4YmuGuD?usp=sharing)
- 🎥 **Demo Video:** [Watch here](https://drive.google.com/file/d/1Rg6TE4r_yKqaPEFDTgaISnFO464SmEt-/view?usp=sharing)

---

## Known Limitations / Scope Notes

This internship version intentionally scoped down a few features from the original proposal:

- **Dietitian role** — not implemented; only `user` and `admin` roles exist.
- **Nutrition estimates** — calculated using a curated food-keyword lookup table rather than a full external food database/API.
- **Diet suggestions** — based on BMI category and standard BMR/activity formulas rather than a clinical nutrition engine.

These are documented in full in the project documentation linked above.

---

## Future Improvements

- Expand the food lookup database or integrate a real nutrition API (e.g., USDA FoodData Central)
- Add a dietitian role with client-assignment and review workflows
- Add data visualizations (charts) for BMI and nutrition trends over time
- Add password reset / email verification flow

---

