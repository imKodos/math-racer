import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import FinishLine from "./FinishLine";
import StartLine from "./StartLine";

function Ghost(props) {
  const racerLevel = getLevelPercent(props.curLevel); //tbd based on which answer the person is

  function getLevelPercent(level){ //if 20 levels, each level is 4.5%
    const levelPercent=95-(level*4.5);
    return (levelPercent+"%");
  }

  return (
    <View style={styles.ghostRacerContainer}>
      {/* <ImageBackground source={require('../assets/greenbg.png')} resizeMode="cover" style={[styles.image]}> */}
      <StartLine />
      <View style={[styles.ghostRacer, { top: racerLevel }]}></View>
      <FinishLine />
      {/* </ImageBackground> */}
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
  image: {
    flex: 1,
    // justifyContent: "center"
  },
});

export default Ghost;
