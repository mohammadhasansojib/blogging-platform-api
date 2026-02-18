import express from "express";
import {Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
dotenv.config();
import PostRouter from "./routes/routes"
import mongoose from "mongoose"

const port = process.env.PORT || 3000;

const app = express();

// Database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Database Connected..."));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Post api routes
app.use("/api/posts", PostRouter);

app.get("/", (req: Request, res: Response) => {
    res.json({message: "Hello World"});
})


app.listen(port, () => console.log(`Server running at port ${port}...`));