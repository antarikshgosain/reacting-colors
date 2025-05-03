import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";


const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                setColors([...colors, randomRgb()]); //adds a new random color to the colors array
            }}/>
            
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{height:100, width:100, backgroundColor: item}} />
                }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    text: {
        fontSize: 30,
        padding: 10,
    },
});

export default ColorScreen;