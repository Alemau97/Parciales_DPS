import React, { useState, useEffect } from "react";
import { Text, TextInput, Modal, Button, Platform, View } from "react-native";

export const ConversorForm = ({ passData }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    passData(value);
  }, [value]);
  return (
    <>
      <Text style={{ marginBottom: 8, color: "#FFF" }}>
        Ingrese el valor en dolares a convertir:{" "}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 22, marginRight: 5 }}>$</Text>
        <TextInput
          placeholder="Ingrese una cantidad"
          style={{
            borderColor: "#a4ffaf",
            borderWidth: 2,
            borderRadius: 8,
            paddingLeft: 8,
            height: 40,
            width: "90%",
            color: "#FFF",
          }}
          onChangeText={(newText) => {
            let actualNumber = newText.replace(/[^0-9]/g, "");
            setValue(actualNumber);
          }}
          value={value}
          keyboardType={Platform.OS === "android" ? "numeric" : "number-pad"}
        />
      </View>
    </>
  );
};
