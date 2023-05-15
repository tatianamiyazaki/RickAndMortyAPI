import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        if (user === '' && password === ''){
            navigation.navigate('main')
        }else{
            alert('Usuário ou senha inválidos!')
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Rick and Morty API
            </Text>
            

            <TextInput
                style={styles.input}
                placeholder='Usuário'
                placeholderTextColor="#fff"
                value={user}
                onChangeText={setUser}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                placeholderTextColor="#fff"
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigation.navigate('signin')}>
                <Text style={styles.buttonText}>Cadastrar Usuário</Text>
            </TouchableOpacity>
        </View>        
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
        color: '#fff',
    },

    button: {
        backgroundColor: '#13B510',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: '80%',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    text:{
        color: '#38B1E0',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 100,
    }

});

export default Login;