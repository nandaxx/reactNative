import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";
import { AutenticacaoContext } from "../../context/autenticacaoContext";

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = useContext(AutenticacaoContext);
    const [isLoading, setLoading] = useState(false);

    const handleLogin = async (email: string, senha: string) => {
        console.log(`Email : ${email} - Senha : ${senha}`);

        const respostaLogin = await login(email, senha);
        setLoading(false);
        if (!respostaLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "OK" },
                    { text: "Não foi possível realizar o login." },
                ]
            );

        } else {
            navigation.navigate('Home');
        }
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
                secureTextEntry//mascarar senha
            />
            {isLoading ===false ? 
            <Button
                title='Entrar'
                onPress={() => {handleLogin(email, senha); setLoading(true)}}
                titleStyle={styles.buttons}
                buttonStyle={styles.buttons}
                containerStyle={styles.buttonsContainerStyle}
            />: <ActivityIndicator size="large" color="#fff"/>}
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