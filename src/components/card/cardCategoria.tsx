import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';

const Card = () => {
    
    return (
        <ScrollView style={styles.container}>
            <ScrollView style={styles.box} horizontal={true}>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 1 foi pressionada')}
                    style={styles.button}
                >
                    <View style={styles.itens}>
                        <Text style={styles.title} >{'Categoria 1'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 2 foi pressionada')}
                    style={styles.button}
                >
                    <View style={styles.itens}>
                        <Text style={styles.title} >{'Categoria 2'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 3 foi pressionada')}
                    style={styles.button}
                >
                    <View style={styles.itens}>
                        <Text style={styles.title} >{'Categoria 3'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 4 foi pressionada')}
                    style={styles.button}
                >
                    <View style={styles.itens}>
                        <Text style={styles.title} >{'Categoria 4'}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    box: {
        flexGrow: 0,
    },
    itens: {
        width: 100,
        height: 100,
        backgroundColor: '#7d81d8',
        alignContent: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});


export default Card;