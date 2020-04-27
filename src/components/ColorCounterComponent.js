import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounterComponent = ({color, onIncrease, onDecrease}) =>
{

    return (
      <View style={styles.containerView}>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`} onPress={onIncrease} />
        <Button title={`Decrease ${color}`} onPress={onDecrease} />
      </View>
    );
};

const styles = StyleSheet.create({
    containerView:
    {
        backgroundColor: '#fff',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default ColorCounterComponent;