  import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./confiq/db.js";
import taskRoutes from "./routes/taskRoute.js"
dotenv.config();

const app = express();


app.use(cors({
  origin: 'https://frontend-iota-five-27.vercel.app', // your frontend URL
  credentials: true,
}));

app.use(express.json());

 connectDB()
app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
