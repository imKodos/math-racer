import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";

function P2() {
  const racerLevel = "40%"; //tbd based on which answer the person is
  return (
    <View style={styles.opRacerContainer}>
      <View style={[styles.opRacer, {top:racerLevel}]}></View>
    </View>
  )
}
const styles =  StyleSheet.create({
  opRacerContainer:{
    flex:1,
    backgroundColor: "pink"
},  opRacer:{
    alignSelf:'center',
    height:20,
    width: 20,
    backgroundColor: "red",
    top: "90%"
},
  });

export default P2