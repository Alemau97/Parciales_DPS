import React from "react";
import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

export const ResultCard = ({ newInput, secondInput, result }) => {
  return (
    <>
      <View style={styles.cardsContainer}>
        <Card containerStyle={styles.cardItem}>
          <Text style={styles.cardLabel}>{newInput}</Text>
        </Card>
        <Card containerStyle={styles.cardItem}>
          <Text style={styles.cardLabel}>{secondInput}</Text>
        </Card>
        <Card
          containerStyle={{
            flexGrow: 4,
            paddingVertical: "12%",
            borderRadius: 24,
            backgroundColor: "transparent",
            borderColor: "#a4ffaf",
            borderWidth: 4,
          }}
        >
          <Text style={styles.cardLabel}>{result}</Text>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 14,
    paddingBottom: 16,
  },
  cardItem: {
    width: "40%",
    paddingVertical: "12%",
    borderRadius: 24,
    backgroundColor: "transparent",
    borderColor: "#a4ffaf",
    borderWidth: 4,
  },
  cardLabel: {
    fontSize: 28,
    textAlign: "center",
    color: "white",
  },
});
