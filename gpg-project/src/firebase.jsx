
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCsLkA2-oUJFaCW7kA5tkMuqemDPfS9INw",
  authDomain: "alumnidekho-2fd65.firebaseapp.com",
  projectId: "alumnidekho-2fd65",
  storageBucket: "alumnidekho-2fd65.appspot.com",
  messagingSenderId: "816540763282",
  appId: "1:816540763282:web:d4cb4af56673332e22d24b",
  measurementId: "G-WSWB08XKQV"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);