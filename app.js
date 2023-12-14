import express from 'express';
import "dotenv/config";
import session from "express-session";
import cors from 'cors';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import animeRoutes from './anime-list/routes.js';
import ReviewRoutes from './reviews/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/animelist");
import Hello from "./hello.js"

const app = express()


app.use(cors());
app.use(express.json());
UserRoutes(app);
animeRoutes(app);
ReviewRoutes(app);
Hello(app)

// app.listen(4000)
app.listen(process.env.PORT || 4000);
