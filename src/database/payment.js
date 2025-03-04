import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

// Add a new payment
export const addPayment = async (paymentData) => {
  try {
    await addDoc(collection(db, "payments"), paymentData);
    console.log("Payment added successfully");
  } catch (error) {
    console.error("Error adding payment:", error.message);
  }
};

// Fetch all payments
export const fetchPayments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "payments"));
    const payments = [];
    querySnapshot.forEach((doc) => {
      payments.push({ id: doc.id, ...doc.data() });
    });
    return payments;
  } catch (error) {
    console.error("Error fetching payments:", error.message);
  }
};

// Update a payment
export const updatePayment = async (paymentId, updatedData) => {
  try {
    const paymentRef = doc(db, "payments", paymentId);
    await updateDoc(paymentRef, updatedData);
    console.log("Payment updated successfully");
  } catch (error) {
    console.error("Error updating payment:", error.message);
  }
};

// Delete a payment
export const deletePayment = async (paymentId) => {
  try {
    const paymentRef = doc(db, "payments", paymentId);
    await deleteDoc(paymentRef);
    console.log("Payment deleted successfully");
  } catch (error) {
    console.error("Error deleting payment:", error.message);
  }
};