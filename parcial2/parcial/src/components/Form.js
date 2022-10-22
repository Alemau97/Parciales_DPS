import React, { useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import { Button } from "@rneui/themed";

export const Form = (props) => {
  const [newInput, setNewInput] = useState("0");
  const [secondInput, setSecondInput] = useState("0");
  const [operation, setOperation] = useState("=");
  const [result, setResult] = useState("0");

  props.passNew(newInput);
  props.passSecond(secondInput);
  props.passResult(result);

  return (
    <View style={useStyles.buttonsContainer}>
      <View style={useStyles.numberContainers}>
        {data.map((item) => (
          <Button
            buttonStyle={useStyles.buttonA}
            title={item.toString()}
            onPress={() => {
              let actualValue;
              if (newInput === 0) {
                actualValue = newInput;
              } else {
                actualValue = newInput.toString();
              }
              actualValue = actualValue + item;
              setNewInput(actualValue);
            }}
            key={item}
          />
        ))}
        <Button
          buttonStyle={useStyles.buttonA}
          title="="
          onPress={() => {
            let firstValue = parseFloat(secondInput);
            let actualValue = parseFloat(newInput);
            let operator = operation;

            switch (operator) {
              case "=":
                setResult(actualValue);
                setNewInput(0);
                setSecondInput(0);
                setOperation("=");
                break;
              case "+":
                setResult(firstValue + actualValue);
                setNewInput(0);
                setSecondInput(0);
                setOperation("=");
                break;
              case "-":
                setResult(firstValue - actualValue);
                setNewInput(0);
                setSecondInput(0);
                setOperation("=");
                break;
              case "*":
                setResult(firstValue * actualValue);
                setNewInput(0);
                setSecondInput(0);
                setOperation("=");
                break;
              case "/":
                console.log("Entraste al divisor");
                setResult(firstValue / actualValue);
                setNewInput(0);
                setSecondInput(0);
                setOperation("=");
                break;
            }
          }}
        />
      </View>
      <View style={useStyles.opContainers}>
        <Button
          buttonStyle={useStyles.buttonB}
          title="√"
          onPress={() => {
            let actualValue = parseFloat(newInput);
            actualValue = Math.sqrt(actualValue);
            setResult(actualValue);
            setNewInput(0);
          }}
        />
        <Button
          buttonStyle={useStyles.buttonB}
          title="x!"
          onPress={() => {
            let actualValue = parseFloat(newInput);
            let actualResult = 1;
            for (let i = 1; i <= actualValue; i++) {
              actualResult = actualResult * i;
            }
            setResult(actualResult);
            setNewInput(0);
          }}
        />
        <Button
          buttonStyle={useStyles.buttonB}
          title="/"
          onPress={() => {
            let actualValue = parseFloat(newInput);
            setSecondInput(actualValue);
            setNewInput(0);
            setOperation("/");
          }}
        />
        <Button
          buttonStyle={useStyles.buttonB}
          title="*"
          onPress={() => {
            let actualValue = parseFloat(newInput);
            setSecondInput(actualValue);
            setNewInput(0);
            setOperation("*");
          }}
        />
        <Button
          buttonStyle={useStyles.buttonB}
          title="-"
          onPress={() => {
            let actualValue = parseFloat(newInput);
            setSecondInput(actualValue);
            setNewInput(0);
            setOperation("-");
          }}
        />
        <Button
          buttonStyle={useStyles.buttonB}
          title="+"
          onPress={() => {
            let actualValue = parseFloat(newInput);
            setSecondInput(actualValue);
            setNewInput(0);
            setOperation("+");
          }}
        />
        <Button
          buttonStyle={useStyles.buttonC}
          title="C"
          onPress={() => {
            setNewInput(0);
            setResult(0);
            setSecondInput(0);
            setOperation("=");
          }}
        />
      </View>
    </View>
  );
};

const useStyles = StyleSheet.create({
  buttonsContainer: {
    marginHorizontal: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonA: {
    padding: 28,
    paddingHorizontal: 28,
    borderColor: "#a4ffaf",
    borderWidth: 4,
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    borderRadius: 12,
    marginBottom: 8,
  },
  buttonALabel: {
    fontSize: 24,
    fontWeight: "700",
  },
  numberContainers: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  opContainers: {
    width: "30%",
    paddingLeft: 8,
  },
  buttonB: {
    width: "90%",
    paddingVertical: 7,
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 3,
    alignSelf: "flex-start",
    borderRadius: 12,
    marginBottom: 3,
    borderColor: "#a4ffaf",
    borderWidth: 3,
    backgroundColor: "transparent",
  },
  buttonBLabel: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  buttonC: {
    width: "90%",
    paddingVertical: 26,
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 3,
    alignSelf: "flex-start",
    borderRadius: 12,
    marginTop: 10,
    borderColor: "#a4ffaf",
    borderWidth: 3,
    backgroundColor: "transparent",
  },
  buttonCLabel: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});

const data = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
