import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  //console.log(props);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button style={styles.button}
        title="Go to Components" 
        onPress={() => navigation.navigate("Components")}
      />
      <Button style={styles.button}
        title="View List" 
        onPress={() => navigation.navigate("List")}
      />
      <Button style={styles.button}
        title="See some Images" 
        onPress={() => navigation.navigate("Image")}
      />
      <Button style={styles.button}
        title="Count Numbers" 
        onPress={() => navigation.navigate("Counter")}
      />
      <Button style={styles.button}
        title="Count Numbers (Reducer)" 
        onPress={() => navigation.navigate("CounterReducer")}
      />
      <Button style={styles.button}
        title="Splash some Color(s)" 
        onPress={() => navigation.navigate("Color")}
      />
      <Button style={styles.button}
        title="Choose Your Color" 
        onPress={() => navigation.navigate("ChooseColor")}
      />
      <Button style={styles.button}
        title="Choose Your Square Color" 
        onPress={() => navigation.navigate("SqaureColor")}
      />
      <Button style={styles.button}
        title="Enter Text" 
        onPress={() => navigation.navigate("Text")}
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

export default HomeScreen;
