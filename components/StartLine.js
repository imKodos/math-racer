import React from "react";
import { StyleSheet, Text, View } from "react-native";

function StartLine() {
  return (
    <View style={styles.startLine}>
      <Text style={{ alignSelf: "center" }}>Start LINE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  startLine: {
    position: "absolute",
    zIndex: -1,
    backgroundColor: "red",
    width: "100%",
    bottom: 20,
  },
});

export default StartLine;
