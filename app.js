import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/animelist");
import Hello from "./hello.js"

const app = express()

UserRoutes(app);
Hello(app)

app.listen(4000)

