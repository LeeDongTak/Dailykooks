import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../firebase';

export const getPlaces = async () => {
  const querySnapShot = await getDocs(collection(db, 'places'));
  const data = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

export const getPlacesWithSearchText = async (queryText) => {
  const placeQuery = query(
    collection(db, 'places'),
    where('place_name', '>=', queryText),
    where('place_name', '<=', queryText + '\uf8ff')
  );
  const querySnapShot = await getDocs(placeQuery);

  const data = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};
