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
  apiKey: "AIzaSyAmzn4bCs0uLaC7siqJeLclBZvpBVFOgoY",
  authDomain: "envios-kian.firebaseapp.com",
  projectId: "envios-kian",
  storageBucket: "envios-kian.firebasestorage.app",
  messagingSenderId: "1087472686228",
  appId: "1:1087472686228:web:de9213d01012f29e6cd081",
  measurementId: "G-P8TBPYNPJS"
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