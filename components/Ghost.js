import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";

function Ghost() {
  const racerLevel = "90%"; //tbd based on which answer the person is
  return (
    <View style={styles.ghostRacerContainer}>
            <View style={[styles.ghostRacer, {top:racerLevel}]}></View>
            <View style={styles.finishLine}>
            <Text style={{alignSelf:'center'}}>
              FINISH LINE
            </Text>
          </View>
            <View style={styles.startLine}>
            <Text style={{alignSelf:'center'}}>
              Start LINE
            </Text>
          </View>
    </View>
  )
}
const styles =  StyleSheet.create({
    ghostRacerContainer: {
        flex:1,
        backgroundColor: "lightgrey"
    }, ghostRacer:{
        alignSelf:'center',
        height:20,
        width: 20,
        backgroundColor: "grey",
        top: "90%"
    }, startLine:{
      position: "absolute",
      zIndex: -1,
      backgroundColor: "red",
      width:"100%",
      bottom: 20
    }, finishLine:{
      position: "absolute",
      zIndex: -1,
      backgroundColor: "red",
      width:"100%",
      top: 20
    },
  });

export default Ghost