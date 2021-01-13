import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

import LoginForm from "../../Components/LoginForm";
import Toast from "react-native-easy-toast";
import { useNavigation } from "@react-navigation/native"; // Cambio Omar

export default function Login() {
  const toastRef = useRef();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#128C73" />
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imglogo}
      />
      <Text style={styles.textobaner}>Bienvenido!</Text>
      <LoginForm toastRef={toastRef} navigation={navigation} />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#128C73",
  },
  imglogo: {
    width: 106,
    height: 106,
    marginTop: 40,
    alignSelf: "center",
  },
  textobaner: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
  },
});
