# 📝 Taskstream

Taskstream is a powerful and user-friendly task management application designed to help you organize your tasks efficiently. It provides features for creating, updating, deleting, and viewing tasks, along with secure user authentication.

## ✨ Features

- 🔒 **User Authentication**: Secure JWT-based registration and login
- ✅ **Task Management**: Full CRUD operations for tasks
- 🎨 **Modern UI**: Responsive React interface with Tailwind CSS
- ⚙️ **Backend API**: Node.js/Express with MongoDB database

## 📂 Folder Structure

```text
Taskstream/
├── Backend/         # Node.js/Express/MongoDB API
│   ├── controllers/ # Business logic
│   ├── middlewares/ # Authentication handlers
│   ├── models/      # MongoDB schemas
│   ├── routes/      # API endpoints
│   ├── services/    # Utility functions
│   ├── config/      # Configuration files
│   ├── server.js    # Entry point
│   └── ...          # Config files
├── Frontend/        # React/Vite application
│    ├── public/     # Static assets
│    ├── src/        # Source code
│    │    ├── assets/      # Images/fonts
│    │    ├── components/  # UI components
│    │    ├── contexts/    # React contexts
│    │    ├── pages/       # View components
│    │    └── services/    # API clients
│    └── ...          # Config files
└── README.md        # Project documentation

## Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

## Prerequisites
- Node.js (v14+ recommended)
- MongoDB (Local or Cloud instance)
- npm or yarn

## Backend Configuration

### Setup
1. Navigate to the Backend folder:
   ```bash
   cd Backend
   npm install
##Environment Variables
PORT_NO=9090
CORS_ORIGIN=http://localhost:5173
MONGO_URI=mongodb://127.0.0.1:27017/task_stream
JWT_SECRET_KEY=$Secret@Key@123$

##start backend 
npm run dev

The backend server will run at http://localhost:9090.

##Frontend Configuration
Setup
Navigate to the Frontend folder:

cd Frontend
Install dependencies:

npm install
##Environment Variables
Create a .env file in the Frontend folder with the following content:

VITE_BACKEND_BASE_URL=http://localhost:9090
Run the Frontend
Start the React application:

npm run dev
The frontend application will run at http://localhost:5173.

Usage
Navigate to the frontend in your browser: http://localhost:5173

Register a new user account or log in with existing credentials

Manage your tasks by adding, editing, or deleting them

API Endpoints
User Authentication
POST /api/user/register: Register a new user

POST /api/user/login: Authenticate a user and receive a JWT

Tasks
GET /api/task: Fetch all tasks

POST /api/task: Create a new task

PATCH /api/task/:id: Update a task by ID

DELETE /api/task/:id: Delete a task by ID



   
