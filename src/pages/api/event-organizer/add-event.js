import { db } from '../../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, date, time, location, price, availableTickets } = req.body;

      // Add the new event to Firestore
      const docRef = await addDoc(collection(db, 'events'), {
        title,
        date,
        time,
        location,
        price,
        availableTickets,
        organizerId: 'organizer123', // Replace with actual organizer ID
      });

      res.status(200).json({ message: 'Event added successfully!', id: docRef.id });
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).json({ error: 'Failed to add event.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}