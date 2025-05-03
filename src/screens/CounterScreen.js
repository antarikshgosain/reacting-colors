import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Button title="Increase " onPress={() => {
                setCounter(counter+1);
            }}/>
            <Text style={styles.counterText}> Current Counter: {counter} </Text>
            <Button title="Decrease" onPress={() => {
                setCounter(counter-1);
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    counterText: {
        fontSize: 20,
        padding: 10,
        textAlign: "center",
    }
});

export default CounterScreen;