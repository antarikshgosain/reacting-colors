import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 51;

const SqaureColorScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log("***");
    console.log("Date: " + new Date().toLocaleString());
    console.log("Red: " + red);
    console.log("Green: " + green);
    console.log("Blue: " + blue);
    
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