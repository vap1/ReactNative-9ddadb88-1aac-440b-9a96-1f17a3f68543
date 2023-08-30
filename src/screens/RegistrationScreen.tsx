
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserRegistrationRequest } from '../types/Types';
import { registerUser } from '../apis/UserRegistrationApi';

const RegistrationScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    const request: UserRegistrationRequest = {
      name,
      email,
      password,
    };

    registerUser(request)
      .then((response) => {
        console.log(response.message);
        // Handle success, e.g., show a success message or navigate to the login screen
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
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
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;