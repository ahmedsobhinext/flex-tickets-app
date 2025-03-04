import { db } from '../../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id, updatedData } = req.body;

      // Update the user document in Firestore
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, updatedData);

      res.status(200).json({ message: 'User updated successfully!' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}