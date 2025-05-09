import express from "express";
import { fetchUserDetails, authenticateUser,handleRegistration } from "../controllers/userController.js";
import { auth } from "../middlewares/JwtAuth.js";

const router = express.Router();

router.get("/",auth,fetchUserDetails)
router.post("/register",handleRegistration );
router.post("/login", authenticateUser);

export default router;
