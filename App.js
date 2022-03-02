import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [input, setInput] = React.useState("");

  // alert(`message: ${input}`);
//todo look at https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
//todo idea: have question at top of screen, input at bottom of screen, racer in middle.
//have input grey while typing, green when correct, red when wrong.
//if wrong, create obstacle?
//if wrong, next input clears whole textinput, or just doesnt allow the wrong digit?
  return (
    <View style={styles.container}>
      <Text>{`4 + 4`}</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        value={input}
        keyboardType="number-pad"
        keyboardAppearance="dark"
        // autoFocus={true}
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
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
