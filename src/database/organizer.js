import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

// Add a new organizer
export const addOrganizer = async (organizerData) => {
  try {
    await addDoc(collection(db, "organizers"), organizerData);
    console.log("Organizer added successfully");
  } catch (error) {
    console.error("Error adding organizer:", error.message);
  }
};

// Fetch all organizers
export const fetchOrganizers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "organizers"));
    const organizers = [];
    querySnapshot.forEach((doc) => {
      organizers.push({ id: doc.id, ...doc.data() });
    });
    return organizers;
  } catch (error) {
    console.error("Error fetching organizers:", error.message);
  }
};

// Update an organizer
export const updateOrganizer = async (organizerId, updatedData) => {
  try {
    const organizerRef = doc(db, "organizers", organizerId);
    await updateDoc(organizerRef, updatedData);
    console.log("Organizer updated successfully");
  } catch (error) {
    console.error("Error updating organizer:", error.message);
  }
};

// Delete an organizer
export const deleteOrganizer = async (organizerId) => {
  try {
    const organizerRef = doc(db, "organizers", organizerId);
    await deleteDoc(organizerRef);
    console.log("Organizer deleted successfully");
  } catch (error) {
    console.error("Error deleting organizer:", error.message);
  }
};