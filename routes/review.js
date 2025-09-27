const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const {validateReview, isLoggedIn,isReviewauthor} = require("../middleware.js");

//review validation

const reviewController = require("../controllers/reviews.js");
//Reviews
//Post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

//Delete route review

router.delete(
  "/:reviewId",
  isReviewauthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;