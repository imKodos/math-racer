import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function GameOver(props) {
  return (
    <View style={styles.gameOverContainer}>
      <View style={styles.gameOverTextContainer}>
        <Text style={styles.gameOverText}>Game Over</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>Level: x</Text>
          <Text style={styles.statsText}>Time:</Text>
          <Text style={styles.statsText}>Ghost Level:</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button style={styles.playAgainButton}
        title="Play Again"
        color="white"
        ></Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  gameOverContainer: {
    // opacity:0.85,
    flex:1,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    zIndex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  gameOverText:{
      color:"white",
      fontSize:60,
      textAlign:"center",
  },
  gameOverTextContainer:{
      flex:0.6,
      backgroundColor:'rgba(255,0,0,0.3)',
      width:"80%",
      borderColor: "red",
      borderWidth: 1,
      borderRadius: 10,
  },
  statsText:{
    color:"white",
    fontSize:30,
    textAlign:"left",
    paddingTop:"15%"
  },
  statsContainer:{
    flex:1,
    top: 20,
    left: 20,
  }, 
  buttonContainer:{
      elevation: 8,
      width:"60%",
      backgroundColor: "red",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignSelf:"center",
      bottom:"5%"
  },
});

export default GameOver;
