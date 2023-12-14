import mongoose from "mongoose";
const anime_listSchema = new mongoose.Schema({
    uid: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    genre: { type: String, required: true },
    aired: { type: Date, required: true },
    episodes: { type: Number, required: true },
    members: { type: Number },
    popularity: { type: Number },
    ranked: { type: Number },
    score: { type: Number },
    img_url: { type: String },
    link: { type: String },
},
    { collection: "anime-list" });

anime_listSchema.index({ title: "text", synopsis: "text", genre: "text" });

export default anime_listSchema;
