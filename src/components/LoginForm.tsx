
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserLoginRequest } from '../types/Types';
import { loginUser } from '../apis/UserLoginApi';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const request: UserLoginRequest = {
      email,
      password,
    };

    try {
      const response = await loginUser(request);
      console.log(response);
      // Handle successful login
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginForm;