import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = ({ email, senha }) => {
        console.log(`Email : ${email} - Senha : ${senha}`);
        navigation.navigate('Home')

    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input 
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
                inputStyle={styles.inputs}
                placeholderTextColor={'black'}
            />
            <Input
                placeholder='senha'
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
                inputStyle={styles.inputs}
                placeholderTextColor={'black'}
            />
            <Button
                title='Entrar'
                onPress={() => handleLogin({ email, senha })}
                titleStyle={styles.buttons}
                buttonStyle={styles.buttons}
                containerStyle={styles.buttonsContainerStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbcdf2',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'

    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        color: '#ffffff',

    },
    title_Button: {
        fontSize: 30,
    }
})

export default Login;