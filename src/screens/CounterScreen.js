//MARK: Using Use Reducer Hooks
//-------------------------------
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return state.counter + action.payload < 0
                ? state
                : { ...state, counter: state.counter + action.payload };
        
        case "Decrement":
            return state.counter + action.payload < 0
              ? state
              : { ...state, counter: state.counter + action.payload };
        
        default:
            return state;
    }
};



const CounterScreen = ({navigation}) =>
{

    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const { counter } = state;
       
    return (
        <View style={styles.containerView}>
            <Text style={styles.text}>CounterScreen</Text>
            <Button
                title="Increase"
                onPress={() => dispatch({ type:'Increment' , payload: 1})}
            />
            <Button
                title="Decrease"
                onPress={() => dispatch({ type: "Decrement", payload: - 1 })}
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


//------------------------------------------------------------------
//MARK: Using Use State Hooks

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Button,
// } from "react-native";

// const CounterScreen = ({ navigation }) => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <View style={styles.containerView}>
//       <Text style={styles.text}>CounterScreen</Text>
//       <Button
//         title="Increase"
//         onPress={() => setCounter(counter + 1)}
//       />
//       <Button
//         title="Decrease"
//         onPress={() => setCounter(counter - 1) }
//       />
//       <Text>{counter}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   containerView: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 30,
//   },
// });

// export default CounterScreen;