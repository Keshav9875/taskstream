import express from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/taskController.js";
import { auth } from "../middlewares/JwtAuth.js";

const router = express.Router();

router.get("/", auth, getAllTasks);
router.post("/", auth, createTask);
router.patch("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

export default router;
