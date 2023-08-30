
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserRegistrationRequest } from '../types/Types';
import { registerUser } from '../apis/UserRegistrationApi';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    const request: UserRegistrationRequest = {
      name,
      email,
      password,
    };

    try {
      const response = await registerUser(request);
      console.log(response);
      // Handle success response and navigate to the next screen
    } catch (error) {
      console.error(error);
      // Handle error response
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
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationForm;