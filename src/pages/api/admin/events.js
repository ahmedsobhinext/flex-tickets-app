import { db } from '../../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const events = [];

      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });

      res.status(200).json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Failed to fetch events.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}