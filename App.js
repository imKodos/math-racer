import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [input, setInput] = React.useState("");

  // alert(`message: ${input}`);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        value={input}
        keyboardType="number-pad"
        keyboardAppearance="dark"
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
