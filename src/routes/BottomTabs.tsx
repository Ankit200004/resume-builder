import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import Home from '../screens/Home';
import Resume from '../screens/Resume';
import CoverLetters from '../screens/CoverLetters';
import Covers from '../screens/Covers';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false, // Hide the header for all tabs
        tabBarStyle: {backgroundColor: '#fff'}, // Style for the tab bar
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string | undefined;

          // Determine the icon based on the route name
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Resume') {
            iconName = focused ? 'document' : 'document-outline';
          } else if (route.name === 'CoverLetters') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          // Return the icon component
          return <Icon name={iconName || ''} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff', // Color for the active tab
        tabBarInactiveTintColor: 'gray', // Color for the inactive tab
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Resume" component={Resume} />
      <Tab.Screen name="CoverLetters" component={Covers} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
