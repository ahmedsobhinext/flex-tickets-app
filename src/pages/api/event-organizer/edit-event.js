import { db } from '../../../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id, updatedData } = req.body;

      // Update the event document in Firestore
      const eventRef = doc(db, 'events', id);
      await updateDoc(eventRef, updatedData);

      res.status(200).json({ message: 'Event updated successfully!' });
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ error: 'Failed to update event.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}