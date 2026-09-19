import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend API is running"
    });
});

//authentication
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

export default app;