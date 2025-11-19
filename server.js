import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import path from "path"
import authRoutes from './routes/authRoutes.js'
import dashboardRoutes from './routes/dashboardRoutes.js'
import  connectDB  from "./config/db.js";
dotenv.config();



const app = express();


app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.use(express.json());

connectDB();

app.use('/api/auth',authRoutes);
app.use('/api/dashboard',dashboardRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
