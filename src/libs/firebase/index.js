import { initializeApp, getApps } from "firebase/app"

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "@/configs/firebaseConfig.json";


let app;
if (!getApps.length) app = initializeApp(firebaseConfig);
else app = getApp();

const auth = getAuth(app);
const db = getFirestore(app);

let analytics;
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { auth, db, analytics }



