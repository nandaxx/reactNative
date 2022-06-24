import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";

const Login = () => {

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    return(
        <View>
            <Text>{'Bem-vindo'}</Text>
             <Input
            placeholder='E-mail'
            onChangeText={setEmail}
            value={email}
            leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24}/>}
            />
            <Input
           placeholder='senha'
            onChangeText={setSenha}
            value={senha}
           leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24}/>}
            />
            <Button
            title='Entrar'
            onPress={() => console.log('Botão pressionado')}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7054B6',
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