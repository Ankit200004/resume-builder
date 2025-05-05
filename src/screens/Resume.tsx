import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Template: {templateId: number};
};

type ResumeNavigationProp = StackNavigationProp<RootStackParamList, 'Template'>;

type Props = {
  navigation: ResumeNavigationProp;
};

const Resume: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Resume Template</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Template', {templateId: 1})}>
            <Image
              source={require('../assets/r1.png')} // Adjust the path
              style={styles.templateImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Template', {templateId: 2})}>
            <Image
              source={require('../assets/r3.png')} // Adjust the path
              style={styles.templateImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Template', {templateId: 3})}>
            <Image
              source={require('../assets/r3.png')} // Adjust the path
              style={styles.templateImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Template', {templateId: 4})}>
            <Image
              source={require('../assets/r4.png')} // Adjust the path
              style={styles.templateImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  templateImage: {
    width: 150, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    margin: 10,
  },
});

export default Resume;
