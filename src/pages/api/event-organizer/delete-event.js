import { db } from '../../../firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete the event document from Firestore
      const eventRef = doc(db, 'events', id);
      await deleteDoc(eventRef);

      res.status(200).json({ message: 'Event deleted successfully!' });
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).json({ error: 'Failed to delete event.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}