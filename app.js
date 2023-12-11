import express from 'express';
import session from "express-session";
import cors from 'cors';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import animeRoutes from './anime-list/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/animelist");
import Hello from "./hello.js"

const app = express()


app.use(cors());
app.use(express.json());
UserRoutes(app);
animeRoutes(app);
Hello(app)

app.listen(4000)

