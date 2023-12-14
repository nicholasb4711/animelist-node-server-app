import mongoose from "mongoose";        // load the mongoose library
const reviewSchema = new mongoose.Schema(
    {        // create the schema
        userId: {
            type: mongoose.Schema.Types.ObjectId,  // Referencing User ID
            required: true,
            ref: 'User'  // Assuming your User model is named 'User'
        },
        animeId: {
            type: mongoose.Schema.Types.ObjectId,  // Using the anime UID as it is a number in your data
            required: true
        },
        reviewText: {
            type: String,
            required: true
        },
        rating: {
            type: Number,  // Optional: You might want to allow users to rate the anime
            min: 1,
            max: 10
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    { collection: "reviews" }
);

export default reviewSchema;      // store data in "users" collection
