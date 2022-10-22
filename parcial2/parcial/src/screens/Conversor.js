import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ConversorForm } from "../components/ConversorForm";
import { Cards } from "../components/Cards";

export const Conversor = () => {
  const [dolar, setDolar] = useState();
  const handleData = (data) => {
    setDolar(data);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true} />
      <ConversorForm passData={handleData} />
      <Cards value={dolar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 24,
  },
});
