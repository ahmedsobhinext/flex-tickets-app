import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

// Add a new user
export const addUser = async (userData) => {
  try {
    await addDoc(collection(db, "users"), userData);
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

// Fetch all users
export const fetchUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
};

// Update a user
export const updateUser = async (userId, updatedData) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, updatedData);
    console.log("User updated successfully");
  } catch (error) {
    console.error("Error updating user:", error.message);
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};