import { initializeApp, getApps } from "firebase/app"

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

import firebaseConfig from "@/configs/firebaseConfig.json";

let app;
if (!getApps.length) app = initializeApp(firebaseConfig);
else app = getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

let analytics;
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { auth, db, analytics, messaging }