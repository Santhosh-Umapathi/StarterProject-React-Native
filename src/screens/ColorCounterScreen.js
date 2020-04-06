import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounterComponent from '../components/ColorCounterComponent'

const COLOR_VALUE = 15;

const ColorCounterScreen = () =>
{

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);



    const setColor = (color, change) =>
    {
        switch (color) {
          case 'red':
            red + change > 255 || red + change < 0
              ? null
              : setRed(red + change);

          case "green":
            green + change > 255 || green + change < 0
              ? null
              : setGreen(green + change);

          case "blue":
            blue + change > 255 || blue + change < 0
              ? null
              : setBlue(blue + change);

          default:
            return;
        }
    };
    


    return (
      <View style={styles.containerView}>
        <Text style={styles.text}>ColorCounterScreen</Text>
        <ColorCounterComponent
          color="Red"
          onIncrease={() => setColor("red", COLOR_VALUE)}
          onDecrease={() => setColor("red", -1 * COLOR_VALUE)}
        />
        <ColorCounterComponent
          color="Green"
          onIncrease={() => setColor("green", COLOR_VALUE)}
          onDecrease={() => setColor("green", -1 * COLOR_VALUE)}
        />
        <ColorCounterComponent
          color="Blue"
          onIncrease={() => setColor("blue", COLOR_VALUE)}
          onDecrease={() => setColor("blue", -1 * COLOR_VALUE)}
        />

        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: `rgb(${red},${green},${blue})`,
          }}
        ></View>
      </View>
    );
};

const styles = StyleSheet.create({
    containerView:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default ColorCounterScreen;