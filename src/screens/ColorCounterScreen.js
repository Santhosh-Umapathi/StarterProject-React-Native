//MARK: Using Use Reducer Hooks
//-------------------------------
import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounterComponent from '../components/ColorCounterComponent'

const COLOR_VALUE = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};



const ColorCounterScreen = () =>
{

  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const { red, green, blue } = state;

    return (
      <View style={styles.containerView}>
        <Text style={styles.text}>ColorCounterScreen</Text>
        <ColorCounterComponent
          color="Red"
          onIncrease={() => dispatch({ type: "red", payload: COLOR_VALUE })}
          onDecrease={() => dispatch({ type: "red", payload: -1 * COLOR_VALUE })}
        />
        <ColorCounterComponent
          color="Green"
          onIncrease={() => dispatch({ type: "green", payload: COLOR_VALUE })}
          onDecrease={() => dispatch({ type: "green", payload: -1 * COLOR_VALUE })}
        />
        <ColorCounterComponent
          color="Blue"
          onIncrease={() => dispatch({ type: "blue", payload: COLOR_VALUE })}
          onDecrease={() => dispatch({ type: "blue", payload: -1 * COLOR_VALUE })}
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
    },
    text: 
    {
        fontSize: 30,
    },
});

export default ColorCounterScreen;

//------------------------------------------------------------------
//MARK: Using Use State Hooks

// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounterComponent from "../components/ColorCounterComponent";

// const COLOR_VALUE = 15;

// const ColorCounterScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const setColor = (color, change) => {
//     switch (color) {
//       case "red":
//         red + change > 255 || red + change < 0 ? null : setRed(red + change);
//         return;

//       case "green":
//         green + change > 255 || green + change < 0
//           ? null
//           : setGreen(green + change);
//         return;

//       case "blue":
//         blue + change > 255 || blue + change < 0
//           ? null
//           : setBlue(blue + change);
//         return;

//       default:
//         return;
//     }
//   };

//   return (
//     <View style={styles.containerView}>
//       <Text style={styles.text}>ColorCounterScreen</Text>
//       <ColorCounterComponent
//         color="Red"
//         onIncrease={() => setColor("red", COLOR_VALUE)}
//         onDecrease={() => setColor("red", -1 * COLOR_VALUE)}
//       />
//       <ColorCounterComponent
//         color="Green"
//         onIncrease={() => setColor("green", COLOR_VALUE)}
//         onDecrease={() => setColor("green", -1 * COLOR_VALUE)}
//       />
//       <ColorCounterComponent
//         color="Blue"
//         onIncrease={() => setColor("blue", COLOR_VALUE)}
//         onDecrease={() => setColor("blue", -1 * COLOR_VALUE)}
//       />

//       <View
//         style={{
//           height: 100,
//           width: 100,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}
//       ></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   containerView: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 30,
//   },
// });

// export default ColorCounterScreen;