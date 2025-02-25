//App.js
import express from "express";
import cors from "cors";
import dotenv, { configDotenv } from 'dotenv';
import { sequelize } from "./models/index.js";
import studentRoutes from './routes/studentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import authRoutes from './routes/authRoutes.js';

configDotenv();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the FacialPass Backend API!");
});

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);

// Sync database
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });