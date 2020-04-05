import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';

const CounterScreen = ({navigation}) =>
{

    const [counter, setCounter] = useState(0);


       
    return (
        <View style={styles.containerView}>
            <Text style={styles.text}>CounterScreen</Text>
            <Button
                title="Increase"
                onPress={() => {
                    
                        setCounter(counter + 1);
                       
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    
                      setCounter(counter - 1);
                    
                }}
            />
            <Text>{counter}</Text>
        </View>
    );
    
};

const styles = StyleSheet.create({
    containerView:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default CounterScreen;