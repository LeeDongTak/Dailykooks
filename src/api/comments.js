import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from '@firebase/firestore';
import { db } from '../firebase';

export const getComments = async (postId) => {
  const q = query(collection(db, 'comments'), where('postId', '==', postId));
  const querySnapShot = await getDocs(q);
  const data = querySnapShot.docs.map((doc) => doc.data());
  return data;
};

export const addComment = async (comment) => {
  console.log(comment);
  await addDoc(collection(db, 'comments'), comment);
};

export const updateComment = async (commentId, updatedContent) => {
  await setDoc(doc(db, 'comments', commentId), updatedContent);
};

export const deleteComment = async (commentId) => {
  await deleteDoc(doc(db, 'comments', commentId));
};
