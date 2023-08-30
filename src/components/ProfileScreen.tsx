
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';
import getUserProfile from '../apis/UserProfileApi';

const ProfileScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfileResponse | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const request: UserProfileRequest = {
          token: 'YOUR_JWT_TOKEN', // Replace with the actual JWT token
        };
        const response = await getUserProfile(request);
        setProfile(response);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error('Failed to retrieve user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View>
        <Text>Error: Failed to retrieve user profile</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Name: {profile.user.name}</Text>
      <Text>Email: {profile.user.email}</Text>
      <Text>Contact Info: {profile.user.contactInfo}</Text>
      <Text>Address: {profile.user.address}</Text>
      {/* Render other profile details */}
    </View>
  );
};

export default ProfileScreen;