import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

// Add a new review
export const addReview = async (reviewData) => {
  try {
    await addDoc(collection(db, "reviews"), reviewData);
    console.log("Review added successfully");
  } catch (error) {
    console.error("Error adding review:", error.message);
  }
};

// Fetch all reviews
export const fetchReviews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    const reviews = [];
    querySnapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() });
    });
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
  }
};

// Update a review
export const updateReview = async (reviewId, updatedData) => {
  try {
    const reviewRef = doc(db, "reviews", reviewId);
    await updateDoc(reviewRef, updatedData);
    console.log("Review updated successfully");
  } catch (error) {
    console.error("Error updating review:", error.message);
  }
};

// Delete a review
export const deleteReview = async (reviewId) => {
  try {
    const reviewRef = doc(db, "reviews", reviewId);
    await deleteDoc(reviewRef);
    console.log("Review deleted successfully");
  } catch (error) {
    console.error("Error deleting review:", error.message);
  }
};