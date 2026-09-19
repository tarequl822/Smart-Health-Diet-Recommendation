import express from "express";
import cors from "cors";
import testRoutes from "./routes/test.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend API is running"
    });
});

app.use("/api/test", testRoutes);

export default app;