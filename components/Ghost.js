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
      {/* <View style={styles.crowdRight}> */}
        {/* <Text>{` OR - CROWD - GO - HERE`}</Text> */}
      {/* </View> */}
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
  crowdRight: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "10%",
    top: 20,
    alignSelf: "flex-end",
    backgroundColor: "yellow",
  },
});

export default Ghost;
