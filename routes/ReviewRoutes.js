// const express = require('express');
// const router = express.Router();
// const ReviewController = require('../controllers/ReviewController');

import { Router } from "express";
import { createReview, deleteReview, getReviewById, getReviews, updateReview } from "../controllers/ReviewController.js";

// Routes pour les avis
const reviewRouter = Router();

reviewRouter
.post('/', createReview)
.get('/', getReviews)
.get('/:id', getReviewById)
.put('/:id', updateReview)
.delete('/:id', deleteReview);

export default reviewRouter;