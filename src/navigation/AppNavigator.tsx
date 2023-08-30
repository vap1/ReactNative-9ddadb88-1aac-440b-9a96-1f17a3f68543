
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AdminUserDetailsScreen from '../screens/AdminUserDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Registration" component={RegistrationScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="AdminUserDetails" component={AdminUserDetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;