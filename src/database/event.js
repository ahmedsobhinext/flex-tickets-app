import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

// Add a new event
export const addEvent = async (eventData) => {
  try {
    await addDoc(collection(db, "events"), eventData);
    console.log("Event added successfully");
  } catch (error) {
    console.error("Error adding event:", error.message);
  }
};

// Fetch all events
export const fetchEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return events;
  } catch (error) {
    console.error("Error fetching events:", error.message);
  }
};

// Update an event
export const updateEvent = async (eventId, updatedData) => {
  try {
    const eventRef = doc(db, "events", eventId);
    await updateDoc(eventRef, updatedData);
    console.log("Event updated successfully");
  } catch (error) {
    console.error("Error updating event:", error.message);
  }
};

// Delete an event
export const deleteEvent = async (eventId) => {
  try {
    const eventRef = doc(db, "events", eventId);
    await deleteDoc(eventRef);
    console.log("Event deleted successfully");
  } catch (error) {
    console.error("Error deleting event:", error.message);
  }
};

// Add a new event
// addEvent({
//   title: "Music Fest",
//   date: "2024-10-15",
//   time: "18:00",
//   location: "Riyadh",
//   price: 50.0,
//   availableTickets: 100,
//   organizerId: "organizer123",
// });

// // Fetch all events
// fetchEvents().then((events) => {
//   console.log("Fetched events:", events);
// });