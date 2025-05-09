import express from "express";
import cors from "cors";
import { connectToDb } from "./config/connectToDb.js";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import dotenv from "dotenv";

// .env
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//cors
const corsOptions = {
   origin: process.env.CORS_ORIGIN,
   methods: ["GET", "POST", "PATCH", "DELETE"], 
   allowedHeaders: ["Content-Type", "Authorization"], 
};

app.use(cors(corsOptions));


connectToDb(process.env.MONGODB_URI).then(() => console.log("DB connected..."));

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.listen(PORT, () => console.log(`Server is running -> http://localhost:${PORT}`));
