import {
    setDoc,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import { db } from "@/libs/firebase";

export const getUser = async (uid) => {
    if (uid) {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        let data = docSnap.data();
        return data;
    }
    else {
        return false;
    }
}

export const updateBrandPhoto = async (uid, brandPhoto) => {
    let postData = {
        updatedate: new Date().toISOString(),
        brandPhoto: brandPhoto,
    };
    const usersRef = collection(db, "users");
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, postData);
}