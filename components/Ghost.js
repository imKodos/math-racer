import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FinishLine from "./FinishLine";
import StartLine from "./StartLine";

function Ghost() {
  const racerLevel = "95%"; //tbd based on which answer the person is
  return (
    <View style={styles.ghostRacerContainer}>
      <FinishLine />
      <View style={[styles.ghostRacer, { top: racerLevel }]}></View>
      <StartLine />
    </View>
  );
}
const styles = StyleSheet.create({
  ghostRacerContainer: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  ghostRacer: {
    alignSelf: "center",
    height: 20,
    width: 20,
    backgroundColor: "grey",
    top: "90%",
  },
});

export default Ghost;
