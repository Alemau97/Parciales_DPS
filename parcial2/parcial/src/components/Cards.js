import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import { Card } from "@rneui/base";

const useStyles = StyleSheet.create({
  cardbody: {
    backgroundColor: "transparent",
    borderColor: "#a4ffaf",
    borderRadius: 8,
    borderWidth: 2,
  },
  cardsContainer: {},
  cardTitle: {
    color: "#a4ffaf",
    fontWeight: "800",
    fontSize: 22,
  },
});

export const Cards = ({ value }) => {
  let colon = (value * 8.75).toFixed(2);
  let peso = (value * 21.46).toFixed(2);
  let euros = (value * 0.86).toFixed(2);
  let libra = (value * 0.78).toFixed(2);
  let franco = (value * 0.92).toFixed(2);

  return (
    <>
      <View style={useStyles.cardsContainer}>
        <Card containerStyle={useStyles.cardbody}>
          <Card.Title style={useStyles.cardTitle}>Colones</Card.Title>
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {colon}
          </Text>
        </Card>
        <Card containerStyle={useStyles.cardbody}>
          <Card.Title style={useStyles.cardTitle}>Peso</Card.Title>
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {peso}
          </Text>
        </Card>
        <Card containerStyle={useStyles.cardbody}>
          <Card.Title style={useStyles.cardTitle}>Euros</Card.Title>
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {euros}
          </Text>
        </Card>
        <Card containerStyle={useStyles.cardbody}>
          <Card.Title style={useStyles.cardTitle}>Libra</Card.Title>
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {libra}
          </Text>
        </Card>
        <Card containerStyle={useStyles.cardbody}>
          <Card.Title style={useStyles.cardTitle}>Franco</Card.Title>
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {franco}
          </Text>
        </Card>
      </View>
    </>
  );
};
