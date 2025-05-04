import React, {useReducer} from "react";
import {Text, StyleSheet, View, Button, } from "react-native";

const CounterReducerScreen = () => {
  
    
    const reducer = (state, action) => {
        switch (action.type) {
        case "increment":
            return {...state, count: state.count + action.payload};
        case "decrement":
            return {...state, count: state.count - action.payload};
        default:
            return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, {count: 0});

  

  return (
    <View>
      <Text style={styles.text}>Count: {state.count}</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({type: "increment", payload: 1})}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({type: "decrement", payload: 1})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        padding: 10,
    },
    button: {
        padding: 20,
    },
    container: {
        margin: 20,
    },
});

export default CounterReducerScreen;