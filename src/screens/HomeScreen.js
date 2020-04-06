import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from "react-native";

const HomeScreen = ({navigation}) =>
{
  return (
    <View style={styles.containerView}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Components Screen"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text>List Screen</Text>
      </TouchableOpacity>
      <Button
        title="Image Screen"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />

      <Button
        title="Counter Screen"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />

      <Button
        title="Box Screen"
        onPress={() => {
          navigation.navigate("Box");
        }}
      />

      <Button
        title="Color Counter Screen"
        onPress={() => {
          navigation.navigate("ColorCounter");
        }}
      />

      <Button
        title="Text Input Screen"
        onPress={() => {
          navigation.navigate("TextInput");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});


export default HomeScreen;
