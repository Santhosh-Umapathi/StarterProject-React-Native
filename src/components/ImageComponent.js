import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageComponent = (props) =>
{
 //Props receives = title , imageLocation, score
 //{ title , imageLocation, score} - Can be declared directly too

 return (
    <View style={styles.containerView}>
        <Text style={styles.text}>{props.title}</Text>
        <Image source={props.imageLocation} />
        <Text>Score = {props.score}</Text>
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

export default ImageComponent;