import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";

export default function App() {
  const [input, setInput] = React.useState("");

  // alert(`message: ${input}`);
  //todo look at https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
  //todo idea: have question at top of screen, input at bottom of screen, racer in middle.
  //have input grey while typing, green when correct, red when wrong.
  //if wrong, create obstacle?
  //if wrong, next input clears whole textinput, or just doesnt allow the wrong digit?
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar hidden={true} />
        <View style={styles.equationContainer}>
          <Text style={styles.equation}>{`4 + 48`}</Text>
        </View>
        <View style={styles.raceContainer}></View>
        <View style={styles.inputContainer}>
          <View style={styles.outerInput1}>
            <View style={styles.outerInput2}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setInput(text)}
                value={input}
                keyboardType="number-pad"
                keyboardAppearance="dark"
                autoFocus={true}
              ></TextInput>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 308,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginLeft: -4
  },
  outerInput1: {
    width: 300,
    borderColor: "cyan",
    borderWidth: 2,
    borderRadius: 10,
  },
  outerInput2: {
    width: 304,
    borderColor: "hotpink",
    borderWidth: 2,
    borderRadius: 10,
   marginLeft:-4
  },
  inputContainer: {
    backgroundColor: "midnightblue",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  equation: {
    position: "absolute",
    alignSelf: "center",
    color: "yellow",
    fontSize: 32,
    textShadowColor: "red",
    textShadowRadius: 40,
    textShadowOffset: { width: 1, height: 1 },
    marginVertical: 4,
    // backgroundColor: "green",
  },
  equationContainer: {
    flex: 0.5,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
  },
  safeAreaContainer: {
    flex: 1,
  },
  raceContainer: {
    backgroundColor: "white",
    flex: 4,
  },
});
