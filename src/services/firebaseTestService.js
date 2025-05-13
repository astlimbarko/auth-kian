import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_CX-Ymm4Allhrv1ogo8yXmg62b6eOS4g",
  authDomain: "calculadora-kian.firebaseapp.com",
  projectId: "calculadora-kian",
  storageBucket: "calculadora-kian.firebasestorage.app",
  messagingSenderId: "968798950382",
  appId: "1:968798950382:web:02a84e87172f0a51aff4ff",
  measurementId: "G-9LDW9T40XY"
};

// Inicializar Firebase con esta configuración específica
const testApp = initializeApp(firebaseConfig, "testApp");
const testDb = getFirestore(testApp);

// Función para probar la escritura en Firestore
export const testFirestoreWrite = async () => {
  try {
    console.log('Test Service: Probando escritura en Firestore...');
    const testDocRef = doc(testDb, 'test_collection', 'test_document');
    
    const data = {
      test: true,
      timestamp: new Date().toISOString(),
      message: "Prueba directa desde el servicio de test"
    };
    
    console.log('Test Service: Intentando escribir:', data);
    await setDoc(testDocRef, data);
    console.log('Test Service: Escritura exitosa');
    
    return {
      success: true,
      message: "Escritura exitosa"
    };
  } catch (error) {
    console.error('Test Service: Error en escritura:', error);
    console.error('Test Service: Tipo de error:', error.name);
    console.error('Test Service: Mensaje:', error.message);
    console.error('Test Service: Código:', error.code);
    
    return {
      success: false,
      error: error.message,
      fullError: error
    };
  }
};

// Función para probar la lectura en Firestore
export const testFirestoreRead = async () => {
  try {
    console.log('Test Service: Probando lectura en Firestore...');
    const testDocRef = doc(testDb, 'test_collection', 'test_document');
    
    const docSnap = await getDoc(testDocRef);
    
    if (docSnap.exists()) {
      console.log('Test Service: Lectura exitosa, datos:', docSnap.data());
      return {
        success: true,
        data: docSnap.data()
      };
    } else {
      console.log('Test Service: No se encontró el documento');
      return {
        success: false,
        error: "Documento no encontrado"
      };
    }
  } catch (error) {
    console.error('Test Service: Error en lectura:', error);
    return {
      success: false,
      error: error.message,
      fullError: error
    };
  }
}; 