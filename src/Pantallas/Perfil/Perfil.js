import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Icon, Avatar, Input } from "react-native-elements";

export default function Perfil() {
  return (
    <View>
      <StatusBar backgroundColor="#128c7e" />
      <CabeceraBG />
      <HeaderAvatar />
    </View>
  );
}
function CabeceraBG() {
  return (
    <View>
      <View style={styles.bg}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Nombre
        </Text>
      </View>
    </View>
  );
}

function HeaderAvatar(props) {
  const cambiarfoto = () => {
    console.log("Hola");
  };

  return (
    <View style={styles.avatarinline}>
      <Avatar
        source={require("../../../assets/avatar.jpg")}
        style={styles.avatar}
        size="large"
        rounded
        showAccessory={true}
        onAccessoryPress={cambiarfoto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: "#128C7E",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarinline: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -70,
  },
  avatar: {
    width: 80,
    height: 80,
  },
});
