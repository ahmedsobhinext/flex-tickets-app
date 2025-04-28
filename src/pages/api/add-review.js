import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { userId, eventId, rating, comment } = req.body;

      // Validate input
      if (!userId || !eventId || !rating || !comment) {
        return res.status(400).json({ error: 'Missing required fields.' });
      }

      // Add the review to Firestore
      await addDoc(collection(db, 'reviews'), {
        userId,
        eventId,
        rating: Number(rating),
        comment,
        createdAt: new Date().toISOString(),
      });

      res.status(200).json({ message: 'Review added successfully!' });
    } catch (error) {
      console.error('Error adding review:', error);
      res.status(500).json({ error: 'Failed to add review.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}