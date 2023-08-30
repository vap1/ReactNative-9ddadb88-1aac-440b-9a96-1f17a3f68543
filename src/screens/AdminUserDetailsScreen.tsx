
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';
import getAdminUserDetails from '../apis/AdminUserDetailsApi';

const AdminUserDetailsScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAdminUserDetails = async () => {
      try {
        const request: AdminUserDetailsRequest = {
          token: 'YOUR_ADMIN_JWT_TOKEN', // Replace with the actual admin JWT token
        };
        const response: AdminUserDetailsResponse = await getAdminUserDetails(request);
        setUsers(response.users);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error('Failed to retrieve admin user details:', error);
        setLoading(false);
      }
    };

    fetchAdminUserDetails();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      {users.map((user, index) => (
        <View key={index}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Contact Info: {user.contactInfo}</Text>
          <Text>Address: {user.address}</Text>
          {/* Render other user details */}
        </View>
      ))}
    </View>
  );
};

export default AdminUserDetailsScreen;