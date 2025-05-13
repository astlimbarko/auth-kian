// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, collection, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence } from "firebase/auth";
import logger from './utils/logger';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_CX-Ymm4Allhrv1ogo8yXmg62b6eOS4g",
  authDomain: "calculadora-kian.firebaseapp.com",
  projectId: "calculadora-kian",
  storageBucket: "calculadora-kian.firebasestorage.app",
  messagingSenderId: "968798950382",
  appId: "1:968798950382:web:02a84e87172f0a51aff4ff",
  measurementId: "G-9LDW9T40XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicialización segura de Analytics con manejo de errores
let analytics = null;
isSupported()
  .then(isSupported => {
    if (isSupported) {
      analytics = getAnalytics(app);
    } else {
      logger.debug('Firebase Analytics no es compatible en este entorno');
    }
  })
  .catch(error => {
    logger.error('Error al verificar compatibilidad con Analytics:', error);
  });

const db = getFirestore(app);
const auth = getAuth(app);

// Configurar persistencia para minimizar problemas con cookies de terceros
if (typeof window !== 'undefined' && window.firebaseAuthOptions) {
  const persistenceType = window.firebaseAuthOptions.persistenceType || 'LOCAL';
  const persistenceMap = {
    'LOCAL': browserLocalPersistence,
    'SESSION': browserSessionPersistence,
    'NONE': inMemoryPersistence
  };

  // Aplicar configuración de persistencia
  auth.setPersistence(persistenceMap[persistenceType])
    .catch((error) => {
      logger.error("Error configurando persistencia de autenticación:", error);
    });
}

// Función para manejar errores de Firebase de forma consistente
export const handleFirebaseError = (error) => {
  logger.error('Error en operación de Firebase:', error);
  
  // Devolver un objeto de error estandarizado
  return {
    success: false,
    error: error.message,
    code: error.code || 'unknown',
    originalError: error
  };
};

export { db, collection, doc, getDoc, setDoc, onSnapshot, auth, signInWithEmailAndPassword, signOut, onAuthStateChanged };
export default app; 