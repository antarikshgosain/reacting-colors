import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => { 
    return (
        <View>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 2,
        fontSize: 15,
    },
});

export default TextScreen;