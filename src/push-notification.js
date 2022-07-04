// // Import the functions you need from the SDKs you need
// import firebase from "firebase";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBfBF92E4ovDbCcCErTIupDXTyhBmY19ic",
//   authDomain: "test-pwa-b38ff.firebaseapp.com",
//   projectId: "test-pwa-b38ff",
//   storageBucket: "test-pwa-b38ff.appspot.com",
//   messagingSenderId: "277993794031",
//   appId: "1:277993794031:web:bf81c285d8982a0f5c2e1a",
//   measurementId: "G-KCR46KNVSF",
// };

// // Initialize Firebase
// export const initializeFirebase = firebase.initializeApp(firebaseConfig);
// // const analytics = getAnalytics(initializeFirebase);

// export const askForPermissionToReceiveNotifications = async () => {
//   try {
//     const messaging = firebase.messaging();
//     await messaging.requestPermission();
//     const token = await messaging.getToken();
//     console.log("Your token is:", token);

//     return token;
//   } catch (error) {
//     console.error(error);
//   }
// };
