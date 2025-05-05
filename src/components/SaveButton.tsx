// import React from 'react';
// import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';

// type Resume = {
//   name: string;
//   title: string;
//   contact: string;
//   skills: string;
//   profile: string;
//   experience: string;
// };

// type RootStackParamList = {
//   Home: {newResume: Resume};
// };

// type ResumeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// type SaveButtonProps = {
//   resume: Resume;
// };

// const SaveButton: React.FC<SaveButtonProps> = ({resume}) => {
//   const navigation = useNavigation<ResumeNavigationProp>();

//   const handleSave = () => {
//     // Navigate to Home with the new resume data
//     navigation.navigate('Home', {newResume: resume});
//     Alert.alert('Success', 'Resume saved successfully!');
//   };

//   return (
//     <TouchableOpacity style={styles.button} onPress={handleSave}>
//       <Text style={styles.buttonText}>Save</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SaveButton;

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the Resume type
type Resume = {
  name: string;
  title: string;
  contact: string;
  skills: string;
  profile: string;
  experience: string;
};

// Define the navigation parameter types
type RootStackParamList = {
  Home: {newResume: Resume};
};

// Define the navigation prop for the Home screen
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type SaveButtonProps = {
  resume: Resume;
};

const SaveButton: React.FC<SaveButtonProps> = ({resume}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSave = () => {
    console.log(
      'Save button clicked, navigating to Home screen with resume:',
      resume,
    );
    // Navigate to Home screen with the new resume
    navigation.navigate('Home', {newResume: resume});
  };

  return (
    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SaveButton;
