import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  CoverLetterTemplate: {templateId: number};
};

type CoversNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CoverLetterTemplate'
>;

type Props = {
  navigation: CoversNavigationProp;
};

const Covers: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Cover Letter Template</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Template 1"
          onPress={() =>
            navigation.navigate('CoverLetterTemplate', {templateId: 1})
          }
        />
        <Button
          title="Template 2"
          onPress={() =>
            navigation.navigate('CoverLetterTemplate', {templateId: 2})
          }
        />
        <Button
          title="Template 3"
          onPress={() =>
            navigation.navigate('CoverLetterTemplate', {templateId: 3})
          }
        />
        <Button
          title="Template 4"
          onPress={() =>
            navigation.navigate('CoverLetterTemplate', {templateId: 4})
          }
        />
      </View>
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
  buttonContainer: {
    width: '100%',
  },
});

export default Covers;
