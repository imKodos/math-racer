import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,SafeAreaView, Text, View, KeyboardAvoidingView, TextInput } from "react-native";

export default function App() {
  const [input, setInput] = React.useState("");

  // alert(`message: ${input}`);
//todo look at https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
//todo idea: have question at top of screen, input at bottom of screen, racer in middle.
//have input grey while typing, green when correct, red when wrong.
//if wrong, create obstacle?
//if wrong, next input clears whole textinput, or just doesnt allow the wrong digit?
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
       <View style={styles.equationContainer}>
          <Text style={styles.equation}>{`4 + 46`}</Text>
      </View> 
      <View style={styles.raceContainer}>

      </View>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        value={input}
        keyboardType="number-pad"
        keyboardAppearance="dark"
        // autoFocus={true}
      ></TextInput>
      </View>
    </SafeAreaView>
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
  inputContainer:{
backgroundColor: "orange",
flex:1
  },
  equation:{
    alignSelf: "center",
    backgroundColor: "green"
  },
  equationContainer:{
    flex:0.5,
    backgroundColor: "yellow"
  },
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
  raceContainer:{
    backgroundColor:"white",
    flex:2
  }
});
