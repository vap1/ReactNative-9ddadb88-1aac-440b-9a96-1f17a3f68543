
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import updateUserProfile from '../apis/UserProfileUpdateApi';
import { UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';

const EditProfileScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');

  const handleProfileUpdate = async () => {
    try {
      const request: UserProfileUpdateRequest = {
        token: 'YOUR_JWT_TOKEN', // Replace with the actual JWT token
        name,
        contactInfo,
        address,
      };
      const response: UserProfileUpdateResponse = await updateUserProfile(request);
      if (response.success) {
        Alert.alert('Success', response.message);
        // Redirect to the profile screen or perform any other necessary actions
      } else {
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update user profile');
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
        placeholder="Contact Info"
        value={contactInfo}
        onChangeText={setContactInfo}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Save Changes" onPress={handleProfileUpdate} />
    </View>
  );
};

export default EditProfileScreen;