import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Form } from "../components/Form";
import { ResultCard } from "../components/ResultCard";

export const Calculadora = () => {
  const [newValue, setNewValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [resultValue, setResultValue] = useState();

  const handleNew = (data) => {
    setNewValue(data);
  };
  const handleSecond = (data) => {
    setSecondValue(data);
  };
  const handleResult = (data) => {
    setResultValue(data);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <ResultCard
          newInput={newValue}
          secondInput={secondValue}
          result={resultValue}
        />
        <Form
          passNew={handleNew}
          passSecond={handleSecond}
          passResult={handleResult}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
});
