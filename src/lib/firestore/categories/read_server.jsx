import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export const getCategory = async ({ id }) => {
  const data = await getDoc(doc(db, `categories/${id}`));
  if (data.exists()) {
    return data.data();
  } else {
    return null;
  }
};

export const getCategories = async () => {
  const list = await getDocs(query(collection(db, "categories")));
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
