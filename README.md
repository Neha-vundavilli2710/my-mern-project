# Nutrition Assistant - Smart Nutrition Companion

A full-stack MERN wellness app that helps users track their BMI, manage a profile, plan weekly meals, view estimated nutrition, and get simple diet recommendations. Includes an admin panel for managing user suggestions.

## Documentation & Demo

- 📄 **Project Documentation:** [Google Drive Link](https://drive.google.com/drive/folders/128n_U4JoXbtpR_o63NH7pZv_x4YmuGuD?usp=sharing)
- 🎥 **Demo Video:** [Watch here](https://drive.google.com/file/d/1Rg6TE4r_yKqaPEFDTgaISnFO464SmEt-/view?usp=sharing)

## Features

- User registration & login (JWT + bcrypt)
- Profile management (age, gender, height, weight, goal)
- BMI calculator with history
- Weekly meal planner (breakfast/lunch/dinner for each day)
- Nutrition tracker with calorie/protein/carb/fat estimates based on planned meals
- BMI-based diet suggestions (recommended/avoid foods, calorie intake, macros, walking distance, meal timing)
- Admin dashboard to view and delete user suggestions (admin-only)

## Tech Stack

- **Frontend:** React (Vite), React Router, Axios, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JWT, bcrypt

## Project Structure

```
Nutrition Assistant/
├── client/     # React frontend
└── server/     # Express backend
```

## Setup & Installation

### 1. Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/Nutrition_Assistant
JWT_SECRET=your-secret-key
```

Run the server:

```bash
npm run dev
```

Backend runs on `http://localhost:8000`

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Usage

1. Register a new account and log in.
2. Fill in your profile (age, gender, height, weight, goal).
3. Calculate and save your BMI.
4. Visit **Diet Recommendation** to view food suggestions and generate a detailed suggestion (calories, macros, walk, timing).
5. Plan your meals for the week in **Weekly Planner**.
6. Check **Nutrition** for today's estimated intake based on planned meals.
7. View past records in **History**.

To access the **Admin Dashboard**, set a user's `role` field to `"admin"` in the `users` collection (MongoDB Compass or `mongosh`), then log in with that account — you'll be redirected to `/admin`.

## API Overview

| Method | Endpoint              | Description                     |
|--------|------------------------|----------------------------------|
| POST   | /api/auth/register    | Register a new user             |
| POST   | /api/auth/login       | Log in and receive a JWT        |
| GET/POST/PUT | /api/profile     | Manage user profile             |
| GET/POST | /api/bmi             | Save / get latest BMI           |
| GET    | /api/bmi/history       | Get BMI history                 |
| GET/POST/PUT/DELETE | /api/meals | Manage weekly meal plan     |
| GET    | /api/history           | Combined BMI + meal history     |
| POST   | /api/suggestions       | Generate a diet suggestion       |
| GET    | /api/suggestions       | Get latest suggestion            |
| GET    | /api/suggestions/all   | Get all suggestions (admin only) |
| DELETE | /api/suggestions/:id   | Delete a suggestion (admin only) |
