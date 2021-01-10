import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CodeInput from "react-native-code-input";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Components/Loading";

export default function ConfirmarNumero() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imglogo}
      />
      <Text style={styles.titulo}>
        Favor revise su sms e introduzca los código
      </Text>
      <CodeInput
        activeColor="#fff"
        inactiveColor="#fff"
        autoFocus={true}
        inputPosition="center"
        size={50}
        codeLength={6}
        containerStyle={{ marginTop: 30 }}
        codeInputStyle={{ borderWidth: 1.5 }}
        onFullfill={(code) => {
          console.log(code);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#128C7E",
    paddingHorizontal: 20,
  },
  imglogo: {
    width: 106,
    height: 106,
    alignItems: "center",
    marginTop: 20,
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginVertical: 20,
  },
});
