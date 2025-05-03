import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text> {color} </Text>
            <Button title={` ${color} ++`} onPress={() => onIncrease()} />
            <Button title={` ${color} --`} onPress={() => onDecrease()} />
        </View>
    )
}
export default ColorCounter;