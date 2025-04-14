import { db, auth } from '../../firebase/firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Default export for the API route
export default async function handler(req, res) {
  // Handle POST request (Add a new user)
  if (req.method === 'POST') {
    try {
      const { name, email, password, phone } = req.body;
      const role = 'user'; // Define the role for the new user

      // Step 1: Create the user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Add the user's data to Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        uid: user.uid, // Store the Firebase UID for reference
        name,
        email,
        phone,
        role, // Include the role in Firestore
      });

      // Respond with success message
      res.status(200).json({
        message: 'User added successfully!',
        id: docRef.id,
        uid: user.uid,
      });
    } catch (error) {
      console.error('Error adding event user:', error);

      // Handle specific Firebase errors
      if (error.code === 'auth/email-already-in-use') {
        res.status(400).json({ error: 'The email address is already in use.' });
      } else if (error.code === 'auth/weak-password') {
        res.status(400).json({ error: 'The password is too weak. Use at least 6 characters.' });
      } else {
        res.status(500).json({ error: 'Failed to add user.' });
      }
    }
  }

  
  // Handle unsupported HTTP methods
  else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}