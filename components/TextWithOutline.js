import React from "react";
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";

function TextWithOutline(props) {
  return (
    <View>
      <Text style={styles.equation}>{props.text}</Text>
      <Text
        style={[
          styles.equation,
          styles.abs,
          { textShadowOffset: { width: -1, height: -1 } },
        ]}
      >
        {props.text}
      </Text>
      <Text
        style={[
          styles.equation,
          styles.abs,
          { textShadowOffset: { width: -1, height: 1 } },
        ]}
      >
        {props.text}
      </Text>
      <Text
        style={[
          styles.equation,
          styles.abs,
          { textShadowOffset: { width: 1, height: -1 } },
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    equation: { 
      fontSize: 70, 
      color: 'midnightblue', 
      textShadowColor: 'cyan', 
      textShadowRadius: 1, 
      textShadowOffset: { 
      width: 1,
      height: 1,
    }}, 
    abs: {
      position: 'absolute',
     }
  });
  
export default TextWithOutline;
