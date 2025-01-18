import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";

export const getProduct = async({id}) => {
    const data = await getDoc(doc(db, `products/${id}`));
    if(data.exists()) {
        return data.data();
    }
    else {
        return null;
    }
}

export const getFeaturedProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), where("isFeatured", "==", true))
  );
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

export const getProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), orderBy("timestampCreate", "desc"))
  );
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

export const getProductsByCategory = async ({ categoryId }) => {
  const list = await getDocs(
    query(collection(db, "products"), orderBy("timestampCreate", "desc"), where("categoryId", "==", categoryId))
  );
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

export const getProductsByBrand = async ({ brandId }) => {
  const list = await getDocs(
    query(
      collection(db, "products"),
      orderBy("timestampCreate", "desc"),
      where("brandId", "==", brandId)
    )
  );
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
