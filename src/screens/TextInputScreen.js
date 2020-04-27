import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputScreen = ({navigation}) =>
{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    return (
      <View style={styles.containerView}>
        <Text style={styles.text}>TextInputScreen</Text>
        <Text>Enter Name:</Text>
        <TextInput
          style={{
            margin: 20,
            borderColor: "gray",
            borderWidth: 0.5,
            padding: 10,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={name => setName(name)}
        />
        <Text>Entered Name is: {name}</Text>

        <Text style={{marginTop: 30}}>Enter Password:</Text>
        <TextInput
          style={{
            margin: 20,
            borderColor: "gray",
            borderWidth: 0.5,
            padding: 10,
          }}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={password => setPassword(password) }
            />
            {password.length < 5 ? <Text>Password must be more than 5 chars</Text> : null}
      </View>
    );
};

const styles = StyleSheet.create({
    containerView:
    {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default TextInputScreen;