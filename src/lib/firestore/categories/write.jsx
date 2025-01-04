import { db, storage } from "@/lib/firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewCategory = async({data, image}) => {
    if(!image) {
        throw new Error('Image is required');
    }
    if(!data?.name) {
        throw new Error('Name is required');
    }
    if(!data?.slug) {
        throw new Error('Slug is required');
    }

    const newId = doc(collection(db, 'ids')).id;
    const imageRef = ref(storage, `categories/${newId}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    await setDoc(doc(db,`categories/${newId}`), {
        ...data,
        id: newId,
        imageURL: imageURL,
        timestampCreate: Timestamp.now(),
    });
}