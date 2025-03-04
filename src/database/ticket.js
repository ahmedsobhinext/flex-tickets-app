import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

// Add a new ticket
export const addTicket = async (ticketData) => {
  try {
    await addDoc(collection(db, "tickets"), ticketData);
    console.log("Ticket added successfully");
  } catch (error) {
    console.error("Error adding ticket:", error.message);
  }
};

// Fetch all tickets
export const fetchTickets = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tickets"));
    const tickets = [];
    querySnapshot.forEach((doc) => {
      tickets.push({ id: doc.id, ...doc.data() });
    });
    return tickets;
  } catch (error) {
    console.error("Error fetching tickets:", error.message);
  }
};

// Update a ticket
export const updateTicket = async (ticketId, updatedData) => {
  try {
    const ticketRef = doc(db, "tickets", ticketId);
    await updateDoc(ticketRef, updatedData);
    console.log("Ticket updated successfully");
  } catch (error) {
    console.error("Error updating ticket:", error.message);
  }
};

// Delete a ticket
export const deleteTicket = async (ticketId) => {
  try {
    const ticketRef = doc(db, "tickets", ticketId);
    await deleteDoc(ticketRef);
    console.log("Ticket deleted successfully");
  } catch (error) {
    console.error("Error deleting ticket:", error.message);
  }
};