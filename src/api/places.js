import { collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase';

export const getPlaces = async () => {
  const querySnapShot = await getDocs(collection(db, 'places'));
  const data = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};
