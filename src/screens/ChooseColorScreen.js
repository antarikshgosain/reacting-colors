import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';


    
const ChooseColorScreen = () => {

    const [color, setColor] = useState('rgb(0, 128, 0)');
    const myRegEx = /\d+/gm;
    
    const moreRedPressed = () => {
        console.log('=> More Red button pressed');
        const matches = color.match(myRegEx);  // ['255', '128', '0']
        const [red, green, blue] = matches.map(Number);
        console.log(red, green, blue);  // 255 128 0
        const newRed = Math.min(red + 50, 255);  // cap at 255
        const newColor = `rgb(${newRed}, ${green}, ${blue})`;
        setColor(newColor);
        console.log("Color set to: " + newColor);
        
    }
    const lessRedPressed = () => {
        console.log('=> Less Red button pressed');
        const matches = color.match(myRegEx);  
        const [red, green, blue] = matches.map(Number);
        console.log(red, green, blue);  
        const newRed = Math.max(red - 50, 0);  // cap at 0
        const newColor = `rgb(${newRed}, ${green}, ${blue})`;
        setColor(newColor);
        console.log("Color set to: " + newColor);
    }
    const moreGreenPressed = () => {
        console.log('=> More Green button pressed');
        const matches = color.match(myRegEx);  // ['255', '128', '0']
        const [red, green, blue] = matches.map(Number);
        console.log(red, green, blue);  // 255 128 0
        const newGreen = Math.min(green + 50, 255);  // cap at 255
        const newColor = `rgb(${red}, ${newGreen}, ${blue})`;
        setColor(newColor);
        console.log("Color set to: " + newColor);
    }
    const lessGreenPressed = () => {
        console.log('=> Less Green button pressed');
        const matches = color.match(myRegEx);  
        const [red, green, blue] = matches.map(Number);
        console.log(red, green, blue);  
        const newGreen = Math.max(green - 50, 0);  // cap at 0
        const newColor = `rgb(${red}, ${newGreen}, ${blue})`;
        setColor(newColor);
        console.log("Color set to: " + newColor);
    }
    const moreBluePressed = () => {
        console.log('=> More Blue button pressed');
        const matches = color.match(myRegEx);  // ['255', '128', '0']
        const [red, green, blue] = matches.map(Number);
        console.log(red, green, blue);  // 255 128 0
        const newBlue = Math.min(blue + 50, 255);  // cap at 255
        const newColor = `rgb(${red}, ${green}, ${newBlue})`;
        setColor(newColor);
        console.log("Color set to: " + newColor);
    }
    const lessBluePressed = () => {
        console.log('=> Less Blue button pressed');
        const matches = color.match(myRegEx);  
        const [red, green, blue] = matches.map(Number);
        console.log(red, green, blue);  
        const newBlue = Math.max(blue - 50, 0);  // cap at 0
        const newColor = `rgb(${red}, ${green}, ${newBlue})`;
        setColor(newColor);
        console.log("Color set to: " + newColor);
    }

    return (
        <View>

            <View style={{flexDirection: 'row', justifyContent: 'center', margin: 30}}>
                <View style={{height:200, width:200, backgroundColor: color}} />
            </View>

            <Text style={styles.headingText}>RED</Text>
            <Button title="More Red" onPress={moreRedPressed} style={styles.button}>
                    More RED
            </Button>
            <Button title="Less Red" onPress={lessRedPressed} style={styles.button}>
                    Less RED
            </Button>
            
            <Text style={styles.headingText}>GREEN</Text>
            <Button title="More Green" onPress={moreGreenPressed} style={styles.button}>
                    More Green
            </Button>
            <Button title="Less Green" onPress={lessGreenPressed} style={styles.button}>
                    Less Green
            </Button>


            <Text style={styles.headingText}>BLUE</Text>
            <Button title="More Blue" onPress={moreBluePressed} style={styles.button}>
                    More Blue
            </Button>
            <Button title="Less Blue" onPress={lessBluePressed} style={styles.button}>
                    More Blue
            </Button>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        padding: 10,
    },
    button: {
        padding: 20,
    },
})

export default ChooseColorScreen;