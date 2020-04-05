import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
    const name = 'John'


    return (
      <View>
        <Text style={styles.textStyle}>ComponentsScreen</Text>
        <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    textStyle:
    {
        fontSize: 30,
    },
    subHeaderStyle:
    {
        fontSize: 20
    }
});

export default ComponentsScreen;
