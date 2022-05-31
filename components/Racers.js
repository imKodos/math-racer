import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ghost from "./Ghost";
import P1 from "./P1";
import P2 from "./P2";

function Racers(props) {
  return (
    <View style={styles.racerContainer}>
      <View style={styles.crowdTop}>
        <Text>
          {props.answer}
          {`   CROWD GO HERE`}
          {props.timer}
          
        </Text>
      </View>
      <Ghost></Ghost>
      <P1 curLevel={props.curLevel}></P1>
      {/* <P2></P2> */}
    </View>
  );
}

//todo -- pass in data from app (should control the calculations) to each racer, have them move accordingly
//todo -- implement a choose your own animation for moving

// const styles = StyleSheet.create({
const styles = StyleSheet.create({
  racerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  crowdTop: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    backgroundColor: "yellow",
  },
  finishLine: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: 20,
    backgroundColor: "red",
  },
  startLine: {
    position: "absolute",
    zIndex: -1,
    backgroundColor: "red",
    width: "100%",
    bottom: 20,
  },
});

export default Racers;
