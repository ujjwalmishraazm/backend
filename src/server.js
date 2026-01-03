  import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./confiq/db.js";

dotenv.config();

const app = express();
import cors from 'cors';

app.use(cors({
  origin: 'frontend-ten-ashy-17.vercel.app', // your frontend URL
  credentials: true,
}));

app.use(express.json());

 await connectDB()

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
