import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login realizado com sucesso');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder="Coloque aqui seu email"
        onChangeText={(text) => setEmail(text)}
        value={email} />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Coloque sua senha"
        onChangeText={(text) => setPassword(text)}
        value={password} />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;