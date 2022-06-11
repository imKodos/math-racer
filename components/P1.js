import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
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
       <ImageBackground source={require('../assets/greenbg.png')} resizeMode="cover" style={[styles.image]}>
        <StartLine></StartLine>
        <View style={[styles.mainRacer, { top: racerLevel }]}>
        </View>
        <FinishLine></FinishLine>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  mainRacer: {
    alignSelf: "center",
    height: 20,
    width: 20,
    backgroundColor: "yellow",
    top: "90%",
  },
  mainRacerContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
});

export default P1;
