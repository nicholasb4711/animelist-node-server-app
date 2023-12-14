import * as dao from "./dao.js";

let currentUser = null;


function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    const review = await dao.createReview(req.body);
    res.json(review);
  }
  const deleteReview = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteReview(id);
    res.json(status);
  }
  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  }
  const findReviewById = async (req, res) => {
    const id = req.params.reviewId;
    const review = await dao.findReviewById(id);
    res.json(review);
  }
  const findReviewsByAnimeId = async (req, res) => {
    const id = req.params.animeId;
    const reviews = await dao.findReviewsByAnimeId(id);
    res.json(reviews);
  }
  const findReviewsByUserId = async (req, res) => {
    const id = req.params.userId;
    const reviews = await dao.findReviewsByUserId(id);
    res.json(reviews);
  }
  const updateReview = async (req, res) => {
    const id = req.params.id;
    const newReview = req.body;
    const status = await dao.updateReview(id, newReview);
    res.json(status);
  }


  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/reviews/:reviewId", findReviewById);
  app.get("/api/reviews/anime/:animeId", findReviewsByAnimeId);
  app.get("/api/reviews/user/:userId", findReviewsByUserId);
  app.put("/api/reviews/:id", updateReview);
  app.delete("/api/reviews/:id", deleteReview);
}

export default ReviewRoutes;