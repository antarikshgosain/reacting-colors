import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = props => {
    console.log(props);
    return (
        <View style={styles.imageCard}>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>Image Score - {props.imageScore}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    imageCard: {
        margin: 10,
    }
});

export default ImageDetail;