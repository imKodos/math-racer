import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FinishLine from "./FinishLine";
import StartLine from "./StartLine";

function P1(props) {
  const racerLevel = getLevelPercent(props.curLevel); //tbd based on which answer the person is
  
  function getLevelPercent(level){ //if 20 levels, each level is 4.5%
    const levelPercent=95-(level*4.5);
    return (levelPercent+"%");
  }
  
  return (
    <View style={styles.mainRacerContainer}>
      <StartLine></StartLine>
      <View style={[styles.mainRacer, { top: racerLevel }]}></View>
      <FinishLine></FinishLine>
    </View>
  );
}
const styles = StyleSheet.create({
  mainRacer: {
    alignSelf: "center",
    height: 20,
    width: 20,
    backgroundColor: "green",
    top: "90%",
  },
  mainRacerContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
});

export default P1;
