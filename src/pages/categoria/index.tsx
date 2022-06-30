import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import MySearch from "../../components/search";

const Categorias = () => {
    return (
        <View style={styles.container}>
            <MySearch/>
            <Text>Categoria</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
})

export default Categorias;