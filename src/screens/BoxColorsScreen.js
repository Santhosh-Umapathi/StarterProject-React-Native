import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const BoxColorsScreen = ({navigation}) =>
{
    const [colors, setColors] = useState([]);

    return (
        <View style={styles.containerView}>
            <Text style={styles.text}>BoxColorsScreen</Text>

            <Button title='Add Color Box' onPress={() =>
            { setColors([...colors, rgbValue()]) }}
            />
            <FlatList
                data={colors}
                keyExtractor={key => key}
                renderItem={({item}) => 
                {
                    return (
                        <View style={{height: 100, width: 100, backgroundColor: item}}>
                        </View>
                    )
                }}
            />
        </View>
        );
};

const rgbValue = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}


const styles = StyleSheet.create({
    containerView:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default BoxColorsScreen;