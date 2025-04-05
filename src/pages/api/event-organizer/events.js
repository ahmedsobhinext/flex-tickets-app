// import { db } from '../../../firebase/firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       // Get the organizer ID from the request (e.g., via authentication or query params)
//       const organizerId = req.query.organizerId;

//       // Query events where the organizer ID matches
//       const q = query(collection(db, 'events'), where('organizerId', '==', "organizer123"));
//       const querySnapshot = await getDocs(q);

//       const events = [];
//       querySnapshot.forEach((doc) => {
//         events.push({ id: doc.id, ...doc.data() });
//       });

//       res.status(200).json(events);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//       res.status(500).json({ error: 'Failed to fetch events.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed.' });
//   }
// }
import { db } from '../../../firebase/firebase';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      if (id) {
        // Fetch a single event by ID
        const eventRef = doc(db, 'events', id);
        const eventSnapshot = await getDoc(eventRef);

        if (eventSnapshot.exists()) {
          // Return the event data
          res.status(200).json({ id: eventSnapshot.id, ...eventSnapshot.data() });
        } else {
          // Event not found
          res.status(404).json({ error: 'Event not found.' });
        }
      } else {
        // Fetch all events
        const q = query(collection(db, 'events'), where('organizerId', '==', "organizer123"));
        const querySnapshot = await getDocs(q);

        const events = [];
        querySnapshot.forEach((doc) => {
          events.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json(events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Failed to fetch events.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}