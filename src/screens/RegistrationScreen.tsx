
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';
import registerUser from '../apis/UserRegistrationApi';

const RegistrationScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const request: UserRegistrationRequest = {
        name,
        email,
        password,
      };
      const response: UserRegistrationResponse = await registerUser(request);
      if (response.success) {
        Alert.alert('Success', response.message);
        // Redirect to the login screen or perform any other necessary actions
      } else {
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to register user');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;