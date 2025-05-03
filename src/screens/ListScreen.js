import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        { name: 'James', age: 20 },
        { name: 'Jillz', age: 21 },
        { name: 'Adam', age: 22 },
        { name: 'Tony' , age: 23 },
        { name: 'Mike', age: 24 },
    ];

    return (

        <View style={styles.container}>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={friends}
                keyExtractor={(friend) => friend.name}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listItem}>
                            <Text style={styles.textStyle}>Friend Name: {item.name} - Age: {item.age}</Text>
                        </View>
                    );
                    
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    textStyle: {
        fontSize: 20,
        padding: 5,

    },
    listItem: {
        borderBlockStyle: 'solid',
        borderColor: '#ff0000',
        borderWidth: 1,
        margin: 2,
    },
});

export default ListScreen;