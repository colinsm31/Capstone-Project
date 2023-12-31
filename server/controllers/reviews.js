import ReviewMessage from "../models/reviewModel.js";
import updatePostCount from "../models/userModel.js";
import mongoose from "mongoose";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewMessage.find();
    // console.log(reviews);
    res.send(reviews);
  } catch (error) {
    res.send(error.message);
  }
}

export const getReviewById = async (req, res) => {
  try {
    // Pull id we are looking for from url
    const id = req.params.id;
    const query = { _id: id };

    // Find review within reviews database that has that unique ID
    const review = await ReviewMessage.findOne(query);
    console.log('Selected Review from Reviews Controllers: ', review);

    res.send(review)
  } catch (error) {
    res.send(error.message);
  }
}

export const createReview = async (req, res) => {
  const review = req.body;
  const reviewId = new mongoose.Types.ObjectId();
  const author = req.body.author;
  const reviewWithIds = { ...review, reviewId, author };
  const newReview = new ReviewMessage(reviewWithIds);
  try {
    await newReview.save()
    res.send(newReview);
  } catch (error) {
    res.send(error.message);
  }
}

export const updateReview = async (req, res) => {
  try {
    const id = req.params.id;
    // Get variables that can be changed
    const { title, message, rating, tags } = req.body;

    const query = { _id: id };

    const result = await ReviewMessage.updateOne(query,{
      $set: {
        title: title,
        message: message,
        rating: rating,
        tags: tags
      }
    });
    res.json({ message: `Updated Reviews: ${result.modifiedCount} ID: ${id}` });
  } catch (error) {
    res.send(error.message);
  }
}

export const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const query = { _id: reviewId };

    const result = await ReviewMessage.deleteOne(query);

    if(result.deletedCount === 1){
      res.status(204).send();
    }
  } catch (error) {
    console.error('Error while deleting review: ', error);
  }
}
