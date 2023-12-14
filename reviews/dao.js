import model from "./model.js";

export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
export const findReviewById = (reviewId) => model.find({_id: reviewId});
export const findReviewsByAnimeId = (animeId) => model.find({animeId: animeId});
export const findReviewsByUserId = (userId) => model.find({userId: userId});
export const updateReview = (reviewId, review) => model.updateOne({_id: reviewId}, {$set: review});
export const deleteReview = (reviewId) => model.deleteOne({_id: reviewId});

