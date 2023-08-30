
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { UserLoginRequest, UserLoginResponse } from '../types/Types';
import { loginUser } from '../apis/UserLoginApi';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const request: UserLoginRequest = {
        email,
        password,
      };

      const response: UserLoginResponse = await loginUser(request);

      if (response.success) {
        // Handle successful login
        Alert.alert('Success', response.message);
      } else {
        // Handle login error
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      // Handle API error
      Alert.alert('Error', 'An error occurred while logging in.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;