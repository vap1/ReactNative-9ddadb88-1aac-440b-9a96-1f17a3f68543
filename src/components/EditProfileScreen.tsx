
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { updateUserProfile } from '../apis/UserProfileUpdateApi';

const EditProfileScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSaveChanges = async () => {
    const request: UserProfileUpdateRequest = {
      token: 'YOUR_JWT_TOKEN',
      name,
      contactInfo,
      address,
      profilePicture,
    };

    try {
      const response: UserProfileUpdateResponse = await updateUserProfile(request);
      console.log(response.message);
    } catch (error) {
      console.error(error);
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
      <TextInput
        placeholder="Profile Picture"
        value={profilePicture}
        onChangeText={setProfilePicture}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default EditProfileScreen;