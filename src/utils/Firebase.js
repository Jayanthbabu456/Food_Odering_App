import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABb64GU6xIFmP8hGk6uCSG7B_mNZrn27E",
  authDomain: "foodfire-e5fae.firebaseapp.com",
  projectId: "foodfire-e5fae",
  storageBucket: "foodfire-e5fae.appspot.com",
  messagingSenderId: "318409984988",
  appId: "1:318409984988:web:dd194334f913b66e775d19",
  measurementId: "G-61WKLG1DQ3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
