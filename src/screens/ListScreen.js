import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
    
    const Friends = [
      { name: "John", age: 20 },
      { name: "Jim", age: 30 },
      { name: "Tim", age: 40 },
      { name: "Javk", age: 50 },
      { name: "Rav", age: 26 },
      { name: "moi", age: 25 },
      { name: "Hill", age: 40 },
      { name: "Will", age: 24 }
    ];

    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator = {false}
            data={Friends}
            keyExtractor={key => key.name}
            renderItem={({item}) => { //item || index available
                return (
                    <Text style={styles.textStyle}>{item.name} - Age{item.age}</Text>
                )
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle:
    {
        fontSize: 20,
        marginVertical: 20
    }
})

export default ListScreen;