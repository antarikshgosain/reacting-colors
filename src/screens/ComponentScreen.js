// The Four main components of React Native
// 1. import(s)
// 2. jsx component
// 3. stylesheet
// 4. export

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name = 'Antariksh';
    const age  = 30;
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>My name is {name}</Text>
            <Text style={styles.textStyle}>My age is {age}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    textStyle: {
        fontSize: 30,
    },

});

export default ComponentScreen;