import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
//import RutasAutenticadas from "./src/Navegacion/RutasAutenticadas";
import RutasNoAutenticadas from "./src/Navegacion/RutasNoAutenticadas";
//import {cerrarsesion} from "./src/Utils/Acciones";
import SwitchNavigator from "./src/Navegacion/SwitchNavigator";
import { validarsesion, iniciarnotificaciones } from "./src/Utils/Acciones";
import Loading from "./src/Components/Loading";
import { encode, decode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

LogBox.ignoreLogs([
  "Animated",
  "Setting a timer",
  "Avatar.onAccessoryPress",
  "Avatar.showAccessory",
]);

export default function App() {
  //cerrarsesion();
  const [user, setuser] = useState(false);
  const [loading, setloading] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    setloading(true);
    validarsesion(setuser);
    iniciarnotificaciones(notificationListener, responseListener);
    setloading(false);
  }, []);
  if (loading) {
    return <Loading isVisible={loading} text="Cargando..." />;
  }
  return user ? <SwitchNavigator /> : <RutasNoAutenticadas />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
