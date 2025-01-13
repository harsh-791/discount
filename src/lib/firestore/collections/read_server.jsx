import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export const getCollection = async ({ id }) => {
  const data = await getDoc(doc(db, `collections/${id}`));
  if (data.exists()) {
    return data.data();
  } else {
    return null;
  }
};

export const getCollections = async () => {
  const list = await getDocs(query(collection(db, "collections")));
  return list.docs.map((snap) => {
    const data = snap.data();
    return {
      ...data,
      timestampCreate: data.timestampCreate.toDate().toISOString(), // Convert to ISO string
      timestampUpdate: data.timestampUpdate
        ? data.timestampUpdate.toDate().toISOString()
        : null, // Convert to ISO string if exists
    };
  });
};