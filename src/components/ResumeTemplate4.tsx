// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// const ResumeTemplate4 = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [details, setDetails] = useState({
//     name: 'MIRA KARLSSON',
//     title: 'SOCIAL MEDIA MARKETING SPECIALIST',
//     contact: '816-555-0146\nmira@example.com\nwww.example.com',
//     skills: `Platform expertise\nContent creation\nAnalytics\nCommunication\nCreativity\nStrategic thinking`,
//     education: `Bellows College\n20XX-20YY\nBA in Communications\n\nEast Beringer Community College\n20XX-20YY\nAA in Communications`,
//     profile: `Social Media Marketing Specialist, utilizing my 5+ years of experience in creating and executing successful social media campaigns, developing engaging content, analyzing and reporting on campaign performance, and staying up to date with the latest trends and best practices in social media marketing. My goal is to increase brand awareness, engagement, and conversion rates while delivering exceptional results and exceeding goals for the company.`,
//     experience: `Social Media Marketing Specialist\n20XX-20YY\nDeveloped and executed successful social media campaigns across multiple platforms to increase brand awareness and drive traffic to the company's website. Managed and grew the company's social media accounts by creating engaging content, monitoring analytics, and implementing social media best practices. Collaborated with cross-functional teams to develop and execute integrated marketing campaigns that leveraged social media to meet business objectives.\n\nDigital Marketing Manager\n20XX-20YY\nLed the development and implementation of the company's digital marketing strategy, including social media marketing, email marketing, and paid advertising. Analyzed and reported on the performance of digital marketing campaigns, using data-driven insights to optimize and improve campaign effectiveness.\n\nContent Marketing Specialist\n20XX-20YY\nDeveloped and executed content marketing strategies that leveraged social media to drive traffic, engagement, and conversions. Produced high-quality, engaging content for social media, email marketing, and the company's blog.`,
//   });

//   const handleEditToggle = () => setIsEditing(prev => !prev);

//   const handleChange = (key: string, value: string) => {
//     setDetails(prev => ({...prev, [key]: value}));
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {isEditing ? (
//           <TextInput
//             style={[styles.name, styles.input]}
//             value={details.name}
//             onChangeText={text => handleChange('name', text)}
//           />
//         ) : (
//           <Text style={styles.name}>{details.name}</Text>
//         )}
//         {isEditing ? (
//           <TextInput
//             style={[styles.title, styles.input]}
//             value={details.title}
//             onChangeText={text => handleChange('title', text)}
//           />
//         ) : (
//           <Text style={styles.title}>{details.title}</Text>
//         )}

//         <View style={styles.row}>
//           <View style={styles.leftColumn}>
//             <Text style={styles.sectionTitle}>CONTACT</Text>
//             {isEditing ? (
//               <TextInput
//                 style={[styles.sectionContent, styles.input]}
//                 multiline
//                 value={details.contact}
//                 onChangeText={text => handleChange('contact', text)}
//               />
//             ) : (
//               <Text style={styles.sectionContent}>{details.contact}</Text>
//             )}

//             <Text style={styles.sectionTitle}>SKILLS</Text>
//             {isEditing ? (
//               <TextInput
//                 style={[styles.sectionContent, styles.input]}
//                 multiline
//                 value={details.skills}
//                 onChangeText={text => handleChange('skills', text)}
//               />
//             ) : (
//               <Text style={styles.sectionContent}>{details.skills}</Text>
//             )}

//             <Text style={styles.sectionTitle}>EDUCATION</Text>
//             {isEditing ? (
//               <TextInput
//                 style={[styles.sectionContent, styles.input]}
//                 multiline
//                 value={details.education}
//                 onChangeText={text => handleChange('education', text)}
//               />
//             ) : (
//               <Text style={styles.sectionContent}>{details.education}</Text>
//             )}
//           </View>

//           <View style={styles.rightColumn}>
//             <Text style={styles.sectionTitle}>PROFILE</Text>
//             {isEditing ? (
//               <TextInput
//                 style={[styles.sectionContent, styles.input]}
//                 multiline
//                 value={details.profile}
//                 onChangeText={text => handleChange('profile', text)}
//               />
//             ) : (
//               <Text style={styles.sectionContent}>{details.profile}</Text>
//             )}

//             <Text style={styles.sectionTitle}>EXPERIENCE</Text>
//             {isEditing ? (
//               <TextInput
//                 style={[styles.sectionContent, styles.input]}
//                 multiline
//                 value={details.experience}
//                 onChangeText={text => handleChange('experience', text)}
//               />
//             ) : (
//               <Text style={styles.sectionContent}>{details.experience}</Text>
//             )}
//           </View>
//         </View>
//       </ScrollView>

//       <TouchableOpacity
//         style={[
//           styles.button,
//           isEditing ? styles.saveButton : styles.editButton,
//         ]}
//         onPress={handleEditToggle}>
//         <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ResumeTemplate4;

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#ffffff',
//     height: '100%',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   title: {
//     fontSize: 12,
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   leftColumn: {
//     width: '35%',
//     paddingRight: 10,
//   },
//   rightColumn: {
//     width: '65%',
//   },
//   sectionTitle: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   sectionContent: {
//     fontSize: 10,
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 5,
//     fontSize: 10,
//   },
//   button: {
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 10,
//     marginHorizontal: 20,
//     borderRadius: 5,
//   },
//   editButton: {
//     backgroundColor: '#4CAF50',
//   },
//   saveButton: {
//     backgroundColor: '#2196F3',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as FileSystem from 'react-native-fs';

const ResumeTemplate4 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    name: 'MIRA KARLSSON',
    title: 'SOCIAL MEDIA MARKETING SPECIALIST',
    contact: '816-555-0146\nmira@example.com\nwww.example.com',
    skills: `Platform expertise\nContent creation\nAnalytics\nCommunication\nCreativity\nStrategic thinking`,
    education: `Bellows College\n20XX-20YY\nBA in Communications\n\nEast Beringer Community College\n20XX-20YY\nAA in Communications`,
    profile: `Social Media Marketing Specialist, utilizing my 5+ years of experience in creating and executing successful social media campaigns, developing engaging content, analyzing and reporting on campaign performance, and staying up to date with the latest trends and best practices in social media marketing. My goal is to increase brand awareness, engagement, and conversion rates while delivering exceptional results and exceeding goals for the company.`,
    experience: `Social Media Marketing Specialist\n20XX-20YY\nDeveloped and executed successful social media campaigns across multiple platforms to increase brand awareness and drive traffic to the company's website. Managed and grew the company's social media accounts by creating engaging content, monitoring analytics, and implementing social media best practices. Collaborated with cross-functional teams to develop and execute integrated marketing campaigns that leveraged social media to meet business objectives.\n\nDigital Marketing Manager\n20XX-20YY\nLed the development and implementation of the company's digital marketing strategy, including social media marketing, email marketing, and paid advertising. Analyzed and reported on the performance of digital marketing campaigns, using data-driven insights to optimize and improve campaign effectiveness.\n\nContent Marketing Specialist\n20XX-20YY\nDeveloped and executed content marketing strategies that leveraged social media to drive traffic, engagement, and conversions. Produced high-quality, engaging content for social media, email marketing, and the company's blog.`,
  });

  const handleEditToggle = async () => {
    if (isEditing) {
      // Generate PDF
      try {
        const htmlContent = `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; padding: 10px; }
                h1, h2 { text-align: center; }
                .section { margin-bottom: 20px; }
                .section-title { font-weight: bold; font-size: 14px; margin-bottom: 5px; }
                .section-content { font-size: 12px; }
                .row { display: flex; }
                .left-column { width: 35%; padding-right: 10px; }
                .right-column { width: 65%; }
              </style>
            </head>
            <body>
              <h1>${details.name}</h1>
              <h2>${details.title}</h2>
              <div class="row">
                <div class="left-column">
                  <div class="section">
                    <div class="section-title">CONTACT</div>
                    <div class="section-content">${details.contact.replace(
                      /\n/g,
                      '<br/>',
                    )}</div>
                  </div>
                  <div class="section">
                    <div class="section-title">SKILLS</div>
                    <div class="section-content">${details.skills.replace(
                      /\n/g,
                      '<br/>',
                    )}</div>
                  </div>
                  <div class="section">
                    <div class="section-title">EDUCATION</div>
                    <div class="section-content">${details.education.replace(
                      /\n/g,
                      '<br/>',
                    )}</div>
                  </div>
                </div>
                <div class="right-column">
                  <div class="section">
                    <div class="section-title">PROFILE</div>
                    <div class="section-content">${details.profile.replace(
                      /\n/g,
                      '<br/>',
                    )}</div>
                  </div>
                  <div class="section">
                    <div class="section-title">EXPERIENCE</div>
                    <div class="section-content">${details.experience.replace(
                      /\n/g,
                      '<br/>',
                    )}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;

        const pdfOptions = {
          html: htmlContent,
          fileName: 'Resume',
          directory: 'Documents',
        };

        const file = await RNHTMLtoPDF.convert(pdfOptions);

        // Select appropriate file path based on platform
        const filePath = file.filePath;

        if (!filePath) {
          throw new Error('File path is undefined');
        }

        // Log file path and alert success
        Alert.alert('Success', `PDF saved at: ${filePath}`);
        console.log('PDF saved at:', filePath);

        // Verify if the file exists
        const fileExists = await FileSystem.exists(filePath);
        if (fileExists) {
          console.log('File exists at:', filePath);
        } else {
          console.log('File not found at the expected path');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to generate PDF');
        console.error('Error generating PDF:', error);
      }
    }

    setIsEditing(prev => !prev);
  };

  const handleChange = (key: string, value: string) => {
    setDetails(prev => ({...prev, [key]: value}));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {isEditing ? (
          <TextInput
            style={[styles.name, styles.input]}
            value={details.name}
            onChangeText={text => handleChange('name', text)}
          />
        ) : (
          <Text style={styles.name}>{details.name}</Text>
        )}
        {isEditing ? (
          <TextInput
            style={[styles.title, styles.input]}
            value={details.title}
            onChangeText={text => handleChange('title', text)}
          />
        ) : (
          <Text style={styles.title}>{details.title}</Text>
        )}

        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Text style={styles.sectionTitle}>CONTACT</Text>
            {isEditing ? (
              <TextInput
                style={[styles.sectionContent, styles.input]}
                multiline
                value={details.contact}
                onChangeText={text => handleChange('contact', text)}
              />
            ) : (
              <Text style={styles.sectionContent}>{details.contact}</Text>
            )}

            <Text style={styles.sectionTitle}>SKILLS</Text>
            {isEditing ? (
              <TextInput
                style={[styles.sectionContent, styles.input]}
                multiline
                value={details.skills}
                onChangeText={text => handleChange('skills', text)}
              />
            ) : (
              <Text style={styles.sectionContent}>{details.skills}</Text>
            )}

            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {isEditing ? (
              <TextInput
                style={[styles.sectionContent, styles.input]}
                multiline
                value={details.education}
                onChangeText={text => handleChange('education', text)}
              />
            ) : (
              <Text style={styles.sectionContent}>{details.education}</Text>
            )}
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.sectionTitle}>PROFILE</Text>
            {isEditing ? (
              <TextInput
                style={[styles.sectionContent, styles.input]}
                multiline
                value={details.profile}
                onChangeText={text => handleChange('profile', text)}
              />
            ) : (
              <Text style={styles.sectionContent}>{details.profile}</Text>
            )}

            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            {isEditing ? (
              <TextInput
                style={[styles.sectionContent, styles.input]}
                multiline
                value={details.experience}
                onChangeText={text => handleChange('experience', text)}
              />
            ) : (
              <Text style={styles.sectionContent}>{details.experience}</Text>
            )}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.button,
          isEditing ? styles.saveButton : styles.editButton,
        ]}
        onPress={handleEditToggle}>
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResumeTemplate4;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
  leftColumn: {
    width: '35%',
    paddingRight: 10,
  },
  rightColumn: {
    width: '65%',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    fontSize: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: '#3498db',
  },
  saveButton: {
    backgroundColor: '#2ecc71',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
