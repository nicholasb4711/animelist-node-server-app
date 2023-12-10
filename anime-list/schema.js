import mongoose from "mongoose";
const anime_listSchema = new mongoose.Schema({
    uid: { type: int, required: true, unique: true },
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    genre: { type: String, required: true },
    aired: { type: Date, required: true },
    episodes: { type: int, required: true },
    members: { type: int },
    popularity: { type: int },
    ranked: { type: int },
    score: { type: int },
    img_url: { type: String },
    link: { type: String },
},
    { collection: "anime-list" });
export default anime_listSchema;
