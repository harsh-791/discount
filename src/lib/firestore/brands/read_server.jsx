import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export const getBrand = async({id}) => {
    const data = await getDoc(doc(db, `brands/${id}`));
    if(data.exists()) {
        return data.data();
    }
    else {
        return null;
    }
}

export const getBrands = async () => {
  const list = await getDocs(query(collection(db, "brands")));
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


