import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Icon, Avatar, Input } from "react-native-elements";
import { cargarImagenesxAspecto } from "../../Utils/Utils";
import {
  subirImagenesBatch,
  ObtenerUsuario,
  addRegistroEspecifico,
  actualizarPerfil,
} from "../../Utils/Acciones";
import Loading from "../../Components/Loading";
import InputEditable from "../../Components/InputEditable";
import Modal from "../../Components/Modal";
import CodeInput from "react-native-code-input";
import FirebaseRecapcha from "../../Utils/FirebaseRecapcha";

export default function Perfil() {
  const [imagenperfil, setimagenperfil] = useState("");
  const [loading, setloading] = useState(false);
  const usuario = ObtenerUsuario();
  const [displayName, setdisplayName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");

  const [editablename, seteditablename] = useState(false);
  const [editableemail, seteditableemail] = useState(false);
  const [editablephone, seteditablephone] = useState(false);

  const [verificationid, setverificationid] = useState("");
  const [isVisible, setisVisible] = useState(true);

  const recapcha = useRef();

  useEffect(() => {
    setimagenperfil(usuario.photoURL);
    const { displayName, phoneNumber, email } = usuario;
    setdisplayName(displayName);
    setphoneNumber(phoneNumber);
    setemail(email);
  }, []);

  const onChangeInput = (input, valor) => {
    switch (input) {
      case "displayName":
        setdisplayName(valor);
        break;
      case "email":
        setemail(valor);
        break;
      case "phoneNumber":
        setphoneNumber(valor);
        break;
    }
  };

  const obtenerValor = (input) => {
    switch (input) {
      case "displayName":
        return displayName;
        break;
      case "email":
        return email;
        break;
      case "phoneNumber":
        return phoneNumber;
        break;
    }
  };

  const actualizarValor = async (input, valor) => {
    switch (input) {
      case "displayName":
        console.log(await actualizarPerfil({ displayName: valor }));
        addRegistroEspecifico("Usuarios", usuario.uid, { displayName: valor });
        console.log(usuario);
        break;
      case "email":
        break;
      case "phoneNumber":
        break;
    }
  };

  const ConfirmarCodigo = async () => {
    console.log("Confirmar codigo");
  };

  return (
    <View>
      <StatusBar backgroundColor="#128c7e" />
      <CabeceraBG />
      <HeaderAvatar
        usuario={usuario}
        imagenperfil={imagenperfil}
        setimagenperfil={setimagenperfil}
        setloading={setloading}
      />
      <FormDatos
        onChangeInput={onChangeInput}
        obtenerValor={obtenerValor}
        editableemail={editableemail}
        editablephone={editablephone}
        editablename={editablename}
        seteditableemail={seteditableemail}
        seteditablephone={seteditablephone}
        seteditablename={seteditablename}
        actualizarValor={actualizarValor}
      />
      <ModalVerification
        isVisibleModal={isVisible}
        setisVisibleModal={setisVisible}
        verificationid={verificationid}
        ConfirmarCodigo={ConfirmarCodigo}
      />
      <Loading isVisible={loading} text="Favor Espere" />
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
  const { usuario, setimagenperfil, imagenperfil, setloading } = props;
  const { uid } = usuario;

  const cambiarfoto = async () => {
    const resultado = await cargarImagenesxAspecto([1, 1]);
    if (resultado.status) {
      setloading(true);
      const url = await subirImagenesBatch([resultado.imagen], "Perfil");
      const update = await actualizarPerfil({ photoURL: url[0] });
      const response = await addRegistroEspecifico("Usuarios", uid, {
        photoURL: url[0],
      });
      if (response.statusreponse) {
        setimagenperfil(url[0]);
        setloading(false);
      } else {
        setloading(false);
        alert("Ha ocurrido un error al actualizar la foto de perfil");
      }
    }
  };

  return (
    <View style={styles.avatarinline}>
      <Avatar
        source={
          imagenperfil
            ? { uri: imagenperfil }
            : require("../../../assets/avatar.jpg")
        }
        style={styles.avatar}
        size="large"
        rounded
        showAccessory={true}
        onAccessoryPress={cambiarfoto}
      />
    </View>
  );
}

function FormDatos(props) {
  const {
    onChangeInput,
    obtenerValor,
    editableemail,
    editablename,
    editablephone,
    seteditableemail,
    seteditablename,
    seteditablephone,
    actualizarValor,
  } = props;
  return (
    <View>
      <InputEditable
        id="displayName"
        label="Nombre"
        obtenerValor={obtenerValor}
        placeholder="Nombre"
        onChangeInput={onChangeInput}
        editable={editablename}
        seteditable={seteditablename}
        actualizarValor={actualizarValor}
      />
      <InputEditable
        id="email"
        label="Correo"
        obtenerValor={obtenerValor}
        placeholder="ejemplo@ejemplo.com"
        onChangeInput={onChangeInput}
        editable={editableemail}
        seteditable={seteditableemail}
        actualizarValor={actualizarValor}
      />
      <InputEditable
        id="phoneNumber"
        label="Teléfono"
        obtenerValor={obtenerValor}
        placeholder="+593000000"
        onChangeInput={onChangeInput}
        editable={editablephone}
        seteditable={seteditablephone}
        actualizarValor={actualizarValor}
      />
    </View>
  );
}

function ModalVerification(props) {
  const {
    isVisibleModal,
    setisVisibleModal,
    ConfirmarCodigo,
    verificationid,
  } = props;

  return (
    <Modal isVisible={isVisibleModal} setIsVisible={setisVisibleModal}>
      <View style={styles.confirmacion}>
        <Text style={styles.titulomodal}>Confirmar Código</Text>
        <Text style={styles.detalle}>
          Se ha enviado un código de verificación a su número de teléfono
        </Text>

        <CodeInput
          secureTextEntry
          activeColor="#128c7e"
          inactiveColor="#128c7e"
          autoFocus={false}
          inputPosition="center"
          size={40}
          containerStyle={{ marginTop: 30 }}
          codeInputStyle={{ borderWidth: 1.5 }}
          codeLength={6}
        />
      </View>
    </Modal>
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
  confirmacion: {
    height: 200,
    width: "100%",
    alignItems: "center",
  },
  titulomodal: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  detalle: {
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
  },
});
