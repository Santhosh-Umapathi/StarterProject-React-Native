import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageComponent from '../components/ImageComponent';

const ImageScreen = ({navigation}) =>
{

    return (
      <View style={styles.containerView}>
        <ImageComponent
            title="Forest"
            imageLocation={require("../../assets/forest.jpg")}
            score = '8'
        />

        <ImageComponent
            title="Beach"
            imageLocation={require("../../assets/beach.jpg")}
            score= '9'
        />

        <ImageComponent
            title="Mountain"
            imageLocation={require("../../assets/mountain.jpg")}
            score = '6'
        />
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

export default ImageScreen;