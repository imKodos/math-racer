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
  const eq1= `12`;
  const eq2 =`2`;
  const op = `x`;

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
          <View style={{marginRight:10}}>
          <Text style={styles.equation}>{eq1}</Text>
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: -1, height: -1}}]}>{eq1}</Text> 
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: -1, height: 1}}]}>{eq1}</Text>
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: 1, height: -1}}]}>{eq1}</Text> 
          </View>
          <View>
          <Text style={styles.equation}>{op}</Text>
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: -1, height: -1}}]}>{op}</Text> 
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: -1, height: 1}}]}>{op}</Text>
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: 1, height: -1}}]}>{op}</Text> 
          </View>
          <View style={{marginLeft:10}}>
          <Text style={styles.equation}>{eq2}</Text>
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: -1, height: -1}}]}>{eq2}</Text> 
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: -1, height: 1}}]}>{eq2}</Text>
          <Text style={[styles.equation, styles.abs, {textShadowOffset: {width: 1, height: -1}}]}>{eq2}</Text> 
          </View>
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
  //   input: {
  //     width: 280,
  //     borderColor: "white",
  //     borderWidth: 2,
  //     borderRadius: 10,
  //     padding: 10,
  //     marginLeft: 3,
  //     marginVertical:-2
  //   },
  //   outerInput1: {
  //     width: 300,
  //     borderColor: "cyan",
  //     borderWidth: 2,
  //     borderRadius: 10,
  //   },
  //   outerInput2: {
  //     width: 290,
  //     borderColor: "hotpink",
  //     borderWidth: 2,
  //     borderRadius: 10,
  //     marginLeft:3,
  //     marginVertical:-2
  //   },
  input: {
    width: 308,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 10,
    padding: 5,
    marginLeft: -5,

    //text:
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  outerInput1: {
    width: 300,
    borderColor: "cyan",
    borderWidth: 3,
    borderRadius: 10,
  },
  outerInput2: {
    width: 304,
    borderColor: "hotpink",
    borderWidth: 3,
    borderRadius: 10,
    marginLeft: -5,
  },
  inputContainer: {
    backgroundColor: "midnightblue",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  // equation: {
  //   alignSelf: "center",
  //   color: "yellow",
  //   fontSize: 32,
  //   textShadowColor: "red",
  //   textShadowRadius: 1,
  //   textShadowOffset: { width: 2, height: 2},
  //   marginVertical: 4,
  //   // backgroundColor: "green",
  // },
  equation: { 
    fontSize: 70, 
    color: 'midnightblue', 
    textShadowColor: 'cyan', 
    textShadowRadius: 1, 
    textShadowOffset: { 
    width: 1,
    height: 1,
  }}, 
  equationContainer: {
    // backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
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
  abs: {
    position: 'absolute',
   }
});
