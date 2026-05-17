import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getPublicEnv, hasFirebasePublicConfig } from "@/lib/config/env";

const firebaseConfig = getPublicEnv();

export const firebaseApp = hasFirebasePublicConfig
  ? getApps().length
    ? getApp()
    : initializeApp(firebaseConfig)
  : null;

export const firebaseAuth = firebaseApp ? getAuth(firebaseApp) : null;
export const firestoreDb = firebaseApp ? getFirestore(firebaseApp) : null;
export const storage = firebaseApp ? getStorage(firebaseApp) : null;
