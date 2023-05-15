import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";


const Signin = () =>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [curso, setCurso] = useState('');


const navigation = useNavigation();

const handleSignin = () => {
    // if(name === '' || phone === '' || cpf === '' || curso === ''){
    //     // alert('Todos os campos devem ser preenchidos')
    // } else{
        navigation.navigate('login')
    // }
};



return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Rick and Morty API
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#fff"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#fff"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#fff"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#fff"
        value={curso}
        onChangeText={setCurso}
      />
      <TextInput
        style={styles.input}
        placeholder="Curso"
        placeholderTextColor="#fff"
        value={curso}
        onChangeText={setCurso}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignin}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    //   backgroundColor: '#3498db',
      borderRadius: 5,
      padding: 10,
      margin: 10,
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
      marginBottom: 40,
    }

  });
  


export default Signin;