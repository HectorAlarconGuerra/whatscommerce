import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CodeInput from "react-native-code-input";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Components/Loading";
import {
  confirmarcodigo,
  obtenerToken,
  ObtenerUsuario,
} from "../../Utils/Acciones";

export default function ConfirmarNumero(props) {
  const { route } = props;
  const { verificationid } = route.params;

  const [loading, setloading] = useState(false);

  const confirmarCodigoSMS = async (code) => {
    // const resultado = await confirmarcodigo(verificationid, code);
    // console.log(resultado);
    // console.log(await obtenerToken());

    const { uid, displayName, photoURL, email, phoneNumber } = ObtenerUsuario();

    //Va a extraer la información del usuario
    //Va a obtener el token - pushnotification
    //va hacer las validaciones y confirmar la autenticacion
  };

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
        onFulfill={(code) => {
          confirmarCodigoSMS(code);
        }}
      />
      <Loading isVisible={loading} text="Favor espere" />
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
