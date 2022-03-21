import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FinishLine from "./FinishLine";
import StartLine from "./StartLine";

function P2() {
  const racerLevel = "95%"; //tbd based on which answer the person is
  return (
    <View style={styles.opRacerContainer}>
      <StartLine></StartLine>
      <View style={[styles.opRacer, { top: racerLevel }]}></View>
      <FinishLine></FinishLine>
    </View>
  );
}
const styles = StyleSheet.create({
  opRacerContainer: {
    flex: 1,
    backgroundColor: "pink",
  },
  opRacer: {
    alignSelf: "center",
    height: 20,
    width: 20,
    backgroundColor: "red",
    top: "90%",
  },
});

export default P2;
