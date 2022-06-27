import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'

const CardImg = () => {

    return (
        <ScrollView style={styles.container} horizontal={true}>
            <View style={styles.box}>
                <Card>
                    <Card.Title>Title</Card.Title>
                    <Card.Image source={require('../../assets/foto.jpeg')} />
                    <Text>description</Text>
                </Card>
            </View>
            <View style={styles.box}>
                <Card>
                    <Card.Title>Title</Card.Title>
                    <Card.Image source={require('../../assets/foto.jpeg')} />
                    <Text>description</Text>
                </Card>
            </View>
            <View style={styles.box}>
                <Card>
                    <Card.Title>Title</Card.Title>
                    <Card.Image source={require('../../assets/foto.jpeg')} />
                    <Text>description</Text>
                </Card>
            </View>
            <View style={styles.box}>
                <Card>
                    <Card.Title>Title</Card.Title>
                    <Card.Image source={require('../../assets/foto.jpeg')} />
                    <Text>description</Text>
                </Card>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 350,
        padding: 0,
    },
    box: {
        width: 250,
        height: 300,
        padding: 0,
    }

})
export default CardImg;