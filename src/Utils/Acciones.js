import { firebaseapp } from "./Firebase";
import * as firebase from "firebase";

export const validarsesion = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("usuario logeado");
    } else {
      console.log("no ha iniciado sesión");
    }
  });
};
