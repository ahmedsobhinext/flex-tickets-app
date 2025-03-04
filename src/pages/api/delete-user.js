import { db } from '../../firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      // Delete the user document from Firestore
      const userRef = doc(db, 'users', id);
      await deleteDoc(userRef);

      res.status(200).json({ message: 'User deleted successfully!' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}