import React, { useRef } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Icon } from "react-native-elements";

export default function InputEditable(props) {
  const {
    label,
    placeholder,
    onChangeInput,
    obtenerValor,
    id,
    editable,
    seteditable,
  } = props;

  const editar = () => {
    seteditable(!editable);
  };

  return (
    <View style={styles.input}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <TextInput
          key={id}
          placeholder={placeholder}
          value={obtenerValor(id)}
          onChangeText={(text) => {
            onChangeInput(id, text);
          }}
          style={styles.textinputinternal}
        />
        {editable ? (
          <Icon
            name="content-save"
            type="material-community"
            size={24}
            onPress={editar}
            style={styles.icon}
          />
        ) : (
          <Icon
            name="pencil"
            type="material-community"
            size={24}
            style={styles.icon}
            onPress={editar}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#cecece",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#128c7e",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  textinputinternal: {
    fontSize: 20,
    width: "80%",
  },
});
