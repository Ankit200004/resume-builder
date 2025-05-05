import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import CoverLetterTemplate1 from '../components/CoverLetterTemplate1';
import CoverLetterTemplate2 from '../components/CoverLetterTemplate2';
import CoverLetterTemplate3 from '../components/CoverLetterTemplate3';
import CoverLetterTemplate4 from '../components/CoverLetterTemplate4';

type RootStackParamList = {
  CoverLetterTemplate: {templateId: number};
};

type CoverLettersRouteProp = RouteProp<
  RootStackParamList,
  'CoverLetterTemplate'
>;

type Props = {
  route: CoverLettersRouteProp;
};

const CoverLetters: React.FC<Props> = ({route}) => {
  const {templateId} = route.params;

  let TemplateComponent: React.FC | null;
  switch (templateId) {
    case 1:
      TemplateComponent = CoverLetterTemplate1;
      break;
    case 2:
      TemplateComponent = CoverLetterTemplate2;
      break;
    case 3:
      TemplateComponent = CoverLetterTemplate3;
      break;
    case 4:
      TemplateComponent = CoverLetterTemplate4;
      break;
    default:
      TemplateComponent = null;
  }

  return (
    <View>
      {TemplateComponent ? (
        <TemplateComponent />
      ) : (
        <Text>Invalid Template</Text>
      )}
    </View>
  );
};

export default CoverLetters;
