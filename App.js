import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from "react-native";
import TextWithOutline from "./components/TextWithOutline";
import Racers from "./components/Racers";
import GameOver from "./components/GameOver";

export default function App() {
  const [input, setInput] = React.useState("");
  const [curLevel, setCurLevel] = React.useState(18);
  const [eq1, setEq1]= React.useState(0);
  const [eq2, setEq2]= React.useState(0);
  const [op, setOp]= React.useState("");
  const [ans, setAns] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  React.useEffect(() => {
    if(!gameOver){
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameOver]);

  React.useEffect(() => {
    buildEquations();
  }, [])

  React.useEffect(() => {
    if(!gameOver){
      if(input!= "" && input==ans){
        setCurLevel(curLevel+1);
        if(curLevel+1 == 20){ //reached the finish line
          setGameOver(true);
          Keyboard.dismiss();
        }else{
          setInput("");
          buildEquations();
        }
      }
    }
  }, [input])

  const buildEquations = () => {
    //get op first
    //addition == 1
    //sub == 2
    //multi == 3
    //division == 4
    var opSel = Math.floor(Math.random() * 2) + 1 
    if(curLevel<6){ //1-5 is add or sub
     setOp(opSel==1? `+`:`-`)
    }

    var num1 = Math.floor(Math.random() * 99) + 1 
    var num2 = Math.floor(Math.random() * 99) + 1 

    if(opSel==2){ //if op is sub, make sure num1 is the greater num
      if(num2>num1){
        var tempNum = num2;
        num2=num1;
        num1=tempNum;
      }
    }
    setEq1(num1);
    setEq2(num2);

   //set the answer:
   if(opSel==1){
     setAns(num1+num2);
   }else if(opSel==2){
    setAns(num1-num2);
   }
  }

  //the idea behind levels is:
  //1-5 is 2 digit max addition or subtraction
  //6-10 is 2x1 digit multiplication or division
  //11-15 is 3-4 digit addition or subtraction 
  //16-17 is 2 digit multiplication and then division [add a time multiplier to guesses if incorrect so they cant keep guessing ]

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
        {gameOver && <GameOver/>}
        <StatusBar hidden={true} />
        <View style={styles.equationContainer}>
          <View style={{ marginRight: 10 }}>
            <TextWithOutline text={eq1}></TextWithOutline>
          </View>
          <View>
            <TextWithOutline text={op}></TextWithOutline>
          </View>
          <View style={{ marginLeft: 10 }}>
            <TextWithOutline text={eq2}></TextWithOutline>
          </View>
        </View>
        <View style={styles.raceContainer}>
          <Racers curLevel={curLevel} timer={seconds} answer={ans}></Racers>
        </View>
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
                editable={!gameOver}
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
  equation: {
    fontSize: 70,
    color: "midnightblue",
    textShadowColor: "cyan",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
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
 
});
