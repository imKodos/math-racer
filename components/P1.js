import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";

function P1() {
  const racerLevel = "90%"; //tbd based on which answer the person is
  return (
    <View style={styles.mainRacerContainer}>
            <View style={[styles.mainRacer, {top:racerLevel}]}></View>
    </View>
  )
}
const styles =  StyleSheet.create({
  mainRacer:{
    alignSelf:'center',
    height:20,
    width: 20,
    backgroundColor: "green",
    top: "90%",
},mainRacerContainer: { 
  flex:1,
  backgroundColor: "lightgreen",
},
  });

export default P1