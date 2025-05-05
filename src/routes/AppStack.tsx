// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import BottomTabs from './BottomTabs'; // Import the BottomTabs navigator
// import TemplateScreen from '../screens/TemplateScreen';
// import Resume from '../screens/Resume';
// import Chats from '../screens/Chats'; // Import the Chats screen

// export type AppStackParamList = {
//   Main: undefined; // Entry point for BottomTabs
//   Template: {templateId: number};
//   Resume: undefined;
//   Chats: undefined;
// };

// const Stack = createNativeStackNavigator<AppStackParamList>();

// export const AppStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTitleAlign: 'center', // Align the header title for the stack
//       }}>
//       <Stack.Screen
//         name="Main"
//         component={BottomTabs}
//         options={{headerShown: false}} // Hide the header for BottomTabs
//       />
//       <Stack.Screen
//         name="Template"
//         component={TemplateScreen}
//         options={{
//           title: 'Template Details', // Set a title for the screen
//           headerStyle: {backgroundColor: '#ADD8E6'},
//           headerTintColor: '#000',
//           headerTitleStyle: {fontWeight: 'bold'},
//         }}
//       />
//       <Stack.Screen
//         name="Resume"
//         component={Resume}
//         options={{
//           title: 'Resume',
//           headerStyle: {backgroundColor: '#ADD8E6'},
//           headerTintColor: '#000',
//           headerTitleStyle: {fontWeight: 'bold'},
//         }}
//       />
//       <Stack.Screen
//         name="Chats"
//         component={Chats}
//         options={{
//           title: 'Chats',
//           headerStyle: {backgroundColor: '#ADD8E6'},
//           headerTintColor: '#000',
//           headerTitleStyle: {fontWeight: 'bold'},
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs'; // Import the BottomTabs navigator
import TemplateScreen from '../screens/TemplateScreen';
import Resume from '../screens/Resume';
import Chats from '../screens/Chats'; // Import the Chats screen
import CoverLetters from '../screens/CoverLetters'; // Import the CoverLetters screen

export type AppStackParamList = {
  Main: undefined; // Entry point for BottomTabs
  Template: {templateId: number};
  Resume: undefined;
  Chats: undefined;
  CoverLetterTemplate: {templateId: number}; // Add CoverLetterTemplate with params
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center', // Align the header title for the stack
      }}>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}} // Hide the header for BottomTabs
      />
      <Stack.Screen
        name="Template"
        component={TemplateScreen}
        options={{
          title: 'Template Details', // Set a title for the screen
          headerStyle: {backgroundColor: '#ADD8E6'},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Resume"
        component={Resume}
        options={{
          title: 'Resume',
          headerStyle: {backgroundColor: '#ADD8E6'},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{
          title: 'Chats',
          headerStyle: {backgroundColor: '#ADD8E6'},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="CoverLetterTemplate"
        component={CoverLetters} // Use the CoverLetters component
        options={{
          title: 'Cover Letter Template',
          headerStyle: {backgroundColor: '#ADD8E6'},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};
