
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';
import { getUserProfile } from '../apis/UserProfileApi';

const ProfileScreen: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileResponse | null>(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const request: UserProfileRequest = {
        token: 'YOUR_JWT_TOKEN', // Replace with the actual JWT token
      };

      const response = await getUserProfile(request);
      setUserProfile(response);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      {userProfile ? (
        <>
          <Image source={{ uri: userProfile.user.profilePicture }} style={styles.profilePicture} />
          <Text style={styles.name}>{userProfile.user.name}</Text>
          <Text style={styles.email}>{userProfile.user.email}</Text>
          <Text style={styles.contactInfo}>{userProfile.user.contactInfo}</Text>
          <Text style={styles.address}>{userProfile.user.address}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
  },
});

export default ProfileScreen;