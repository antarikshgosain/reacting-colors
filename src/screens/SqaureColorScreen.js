import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 51;
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: +51 || -51 }
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state : { ...state, red: state.red + action.payload };
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state : { ...state, green: state.green + action.payload };
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SqaureColorScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log("***");
    console.log("Date: " + new Date().toLocaleString());
    console.log("Red: " + red);
    console.log("Green: " + green);
    console.log("Blue: " + blue);

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    
    return (
        <View>
            <ColorCounter 
                color="Red"   
                onIncrease={() => setRed(Math.min(red + COLOR_INCREMENT, 255))}
                onDecrease={() => setRed(Math.max(red - COLOR_INCREMENT,   0))} 
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => setGreen(Math.min(green + COLOR_INCREMENT, 255))}
                onDecrease={() => setGreen(Math.max(green - COLOR_INCREMENT,   0))} 
            />
            <ColorCounter 
                color="Blue"  
                onIncrease={() => setBlue(Math.min(blue + COLOR_INCREMENT, 255))}
                onDecrease={() => setBlue(Math.max(blue - COLOR_INCREMENT,   0))}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center', margin: 30}}>
                <View style={styles.coloredSquare} backgroundColor={`rgb(${red}, ${green}, ${blue})`} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    text: {
        fontSize: 30,
        padding: 10,
    },
    coloredSquare: {
        height: 250,
        width: 250,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        
    },
});

export default SqaureColorScreen;