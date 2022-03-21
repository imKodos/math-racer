import React from "react";
import { StyleSheet, Text, View } from "react-native";

function FinishLine() {
  return (
    <View style={styles.finishLine}>
      <Text style={{ alignSelf: "center" }}>Finish LINE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  finishLine: {
    position: "absolute",
    zIndex: -1,
    backgroundColor: "red",
    width: "100%",
    top: 20,
  },
});

export default FinishLine;
