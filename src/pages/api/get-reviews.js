import { db } from '../../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { eventId } = req.query;

      if (!eventId) {
        return res.status(400).json({ error: 'Event ID is required.' });
      }

      // Query Firestore to fetch reviews for the given event
      const q = query(collection(db, 'reviews'), where('eventId', '==', eventId));
      const querySnapshot = await getDocs(q);

      const reviews = [];
      querySnapshot.forEach((doc) => {
        reviews.push({ id: doc.id, ...doc.data() });
      });

      res.status(200).json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Failed to fetch reviews.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}