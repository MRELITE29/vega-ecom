const publicEnv = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  environment: process.env.NEXT_PUBLIC_APP_ENV ?? "development",
};

export const hasFirebasePublicConfig = Object.values(publicEnv)
  .filter((value) => typeof value === "string")
  .every((value) => value && value.length > 0);

export function getPublicEnv() {
  return publicEnv;
}
