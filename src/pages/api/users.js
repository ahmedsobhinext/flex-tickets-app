// import { db } from '../../firebase/firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'users'));
//       const users = [];

//       querySnapshot.forEach((doc) => {
//         users.push({ id: doc.id, ...doc.data() });
//       });

//       res.status(200).json(users);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       res.status(500).json({ error: 'Failed to fetch users.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed.' });
//   }
// }
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      if (id) {
        // Fetch a single user by ID
        const userRef = doc(db, 'users', id);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          res.status(200).json({ id: userSnapshot.id, ...userSnapshot.data() });
        } else {
          res.status(404).json({ error: 'User not found.' });
        }
      } else {
        // Fetch all users
        const q = query(collection(db, 'users'));
        const querySnapshot = await getDocs(q);

        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json(users);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}