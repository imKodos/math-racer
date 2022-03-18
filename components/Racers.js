import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
import Ghost from './Ghost';
import P1 from './P1';
import P2 from './P2';

function Racers() {
    
  return (
   <View style={styles.racerContainer}>
         <View style={styles.crowdTop}>
          <Text>
            {/* {ans} */}
            {`   CROWD GO HERE`}
          </Text>
          </View>
        <Ghost></Ghost>
        <P1></P1>
        <P2></P2>    
   </View>
   
  )
}

//todo -- figure out how to put the racer on top of the start line
//todo -- pass in data from app (should control the calculations) to each racer, have them move accordingly
//todo -- implement a choose your own animation for moving

// const styles = StyleSheet.create({
    const styles =  StyleSheet.create({
    racerContainer:{
        flex:1,
        flexDirection: 'row',
    },crowdTop: {
      position: "absolute",
      zIndex: 1
    },
   
  });

export default Racers