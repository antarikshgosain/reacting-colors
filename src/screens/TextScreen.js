import React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => { 
    const [name, setName] = useState('');
    console.log(`name is ${name}`);
    return (
        <View>
            <Text style={{ fontSize: 30, marginHorizontal: 10 }}>Enter Name:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            
            { name.length < 5 ? 
                <Text>
                    Name should be at least 5 charaters
                </Text> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
        fontSize: 15,
    },
});

export default TextScreen;