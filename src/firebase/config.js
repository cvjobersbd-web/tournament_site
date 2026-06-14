// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';

// আপনার Firebase কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyDIqq9O3UHB_a4F8jYneVl2J27FwWhfVkw",
  authDomain: "mgt-esports.firebaseapp.com",
  projectId: "mgt-esports",
  storageBucket: "mgt-esports.firebasestorage.app",
  messagingSenderId: "506090436515",
  appId: "1:506090436515:web:778e444dc75b8ab3b58c16",
  measurementId: "G-YX8NR996CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Auth functions
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    let errorMessage = 'লগইন ব্যর্থ হয়েছে!';
    if (error.code === 'auth/invalid-credential') {
      errorMessage = 'ইমেইল বা পাসওয়ার্ড ভুল!';
    } else if (error.code === 'auth/user-not-found') {
      errorMessage = 'এই ইমেইলে কোনো একাউন্ট নেই!';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'পাসওয়ার্ড ভুল!';
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = 'অনেকবার চেষ্টা করেছেন। কিছুক্ষণ পর আবার চেষ্টা করুন!';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'ভালো ইমেইল দিন!';
    }
    return { success: false, error: errorMessage };
  }
};

export const signupWithEmail = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Update profile with display name
    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }
    return { success: true, user: userCredential.user };
  } catch (error) {
    let errorMessage = 'সাইনআপ ব্যর্থ হয়েছে!';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'এই ইমেইল ইতিমধ্যে ব্যবহার করা হয়েছে!';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'পাসওয়ার্ড খুবই সহজ! কমপক্ষে ৬ অক্ষর ব্যবহার করুন।';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'ভালো ইমেইল দিন!';
    }
    return { success: false, error: errorMessage };
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { success: true, user: result.user };
  } catch (error) {
    let errorMessage = 'গুগল লগইন ব্যর্থ হয়েছে!';
    if (error.code === 'auth/popup-closed-by-user') {
      errorMessage = 'পপআপ বন্ধ করে দিয়েছেন! আবার চেষ্টা করুন।';
    } else if (error.code === 'auth/popup-blocked') {
      errorMessage = 'পপআপ ব্লক! ব্রাউজার সেটিংস চেক করুন।';
    } else if (error.code === 'auth/cancelled-popup-request') {
      errorMessage = 'পপআপ রিকোয়েস্ট বাতিল হয়েছে!';
    }
    return { success: false, error: errorMessage };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    let errorMessage = 'পাসওয়ার্ড রিসেট লিংক পাঠানো যায়নি!';
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'এই ইমেইলে কোনো একাউন্ট নেই!';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'ভালো ইমেইল দিন!';
    }
    return { success: false, error: errorMessage };
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export { auth, onAuthStateChanged };