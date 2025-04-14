import { db } from '../../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { uid } = req.query;

      if (!uid) {
        return res.status(400).json({ error: 'UID is required.' });
      }

      // Query Firestore to find the user document with the matching UID
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('uid', '==', uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return res.status(404).json({ error: 'User not found.' });
      }

      // Extract the role from the first matching document
      const userData = querySnapshot.docs[0].data();
      const role = userData.role;

      res.status(200).json({ role });
    } catch (error) {
      console.error('Error fetching user role:', error);
      res.status(500).json({ error: 'Failed to fetch user role.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}