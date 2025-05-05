import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import ResumeTemplate1 from '../components/ResumeTemplate1';
import ResumeTemplate2 from '../components/ResumeTemplate2';
import ResumeTemplate3 from '../components/ResumeTemplate3';
import ResumeTemplate4 from '../components/ResumeTemplate4';

type RootStackParamList = {
  Template: {templateId: number};
};

type TemplateScreenRouteProp = RouteProp<RootStackParamList, 'Template'>;

type Props = {
  route: TemplateScreenRouteProp;
};

const TemplateScreen: React.FC<Props> = ({route}) => {
  const {templateId} = route.params;

  let TemplateComponent: React.FC | null;
  switch (templateId) {
    case 1:
      TemplateComponent = ResumeTemplate1;
      break;
    case 2:
      TemplateComponent = ResumeTemplate2;
      break;
    case 3:
      TemplateComponent = ResumeTemplate3;
      break;
    case 4:
      TemplateComponent = ResumeTemplate4;
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

export default TemplateScreen;
