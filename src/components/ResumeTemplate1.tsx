// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// const ResumeTemplate1 = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [resumeData, setResumeData] = useState({
//     name: 'JONATHAN WRIGHT',
//     title: 'Lead Business Analyst',
//     contact:
//       '+1-921-389-0182 • name@gmail.com • linkedin.com/in/jonwright • Dallas, TX',
//     summary:
//       'I am an experienced Business Analyst with a strong technical background and great project management skills...',
//     skills:
//       'Business: Budgeting • Financial Analysis • Project Management • Stakeholder Management • Business Strategy\nTechnology: Excel • VBA • SQL • QuickBooks • Power BI • Tableau • Python',
//     experience: [
//       {
//         jobTitle: 'Network Solutions LLC',
//         jobPosition: 'Lead Business Analyst & Project Manager',
//         jobLocation: 'Dallas, TX',
//         jobDates: '2019 - Ongoing',
//         jobDescription:
//           '• Created new strategies to manage $2 million of accounts at risk, resulting in an increase of 4% in revenue in 6 months...',
//       },
//       {
//         jobPosition: 'Senior Business Analyst',
//         jobDates: '2017 - 2019',
//         jobDescription:
//           '• Through an improved pricing model, increased gross revenue of 15% in 2018 compared to 2017 with no change to fixed costs...',
//       },
//     ],
//     education: [
//       'University of Wisconsin\nM.Sc. in Finance\n2012 - 2013',
//       'University of Wisconsin\nBBA: Business, Supply Chain Management\n2008 - 2012',
//     ],
//     courses:
//       'PMI Professional in Business Analysis (PBA) — PMI, 2019\nCertified Associate in Project Management (CAPM) — PMI, 2018\nHigh-Dimensional Data Analysis — Harvard, 2017',
//     hobbies:
//       'Giving back to my community\nWith my two kids, I spend at least one day each month volunteering...',
//   });

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (key: string, value: string) => {
//     setResumeData(prevState => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {isEditing ? (
//         <TextInput
//           style={styles.input}
//           value={resumeData.name}
//           onChangeText={text => handleChange('name', text)}
//         />
//       ) : (
//         <Text style={styles.name}>{resumeData.name}</Text>
//       )}

//       {isEditing ? (
//         <TextInput
//           style={styles.input}
//           value={resumeData.title}
//           onChangeText={text => handleChange('title', text)}
//         />
//       ) : (
//         <Text style={styles.title}>{resumeData.title}</Text>
//       )}

//       {isEditing ? (
//         <TextInput
//           style={styles.input}
//           value={resumeData.contact}
//           onChangeText={text => handleChange('contact', text)}
//         />
//       ) : (
//         <Text style={styles.contact}>{resumeData.contact}</Text>
//       )}

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Summary</Text>
//         {isEditing ? (
//           <TextInput
//             style={styles.input}
//             multiline
//             value={resumeData.summary}
//             onChangeText={text => handleChange('summary', text)}
//           />
//         ) : (
//           <Text style={styles.sectionContent}>{resumeData.summary}</Text>
//         )}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Skills</Text>
//         {isEditing ? (
//           <TextInput
//             style={styles.input}
//             multiline
//             value={resumeData.skills}
//             onChangeText={text => handleChange('skills', text)}
//           />
//         ) : (
//           <Text style={styles.skillsContent}>{resumeData.skills}</Text>
//         )}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Experience</Text>
//         {resumeData.experience.map((exp, index) => (
//           <View key={index} style={styles.experienceItem}>
//             <Text style={styles.experienceTitle}>{exp.jobTitle}</Text>
//             <Text style={styles.experiencePosition}>{exp.jobPosition}</Text>
//             <Text style={styles.experienceDates}>{exp.jobDates}</Text>
//             <Text style={styles.experienceLocation}>{exp.jobLocation}</Text>
//             <Text style={styles.sectionContent}>{exp.jobDescription}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Education</Text>
//         {resumeData.education.map((edu, index) => (
//           <Text key={index} style={styles.sectionContent}>
//             {edu}
//           </Text>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Courses</Text>
//         <Text style={styles.sectionContent}>{resumeData.courses}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Hobbies</Text>
//         <Text style={styles.sectionContent}>{resumeData.hobbies}</Text>
//       </View>

//       {/* Edit/Save Button */}
//       <TouchableOpacity
//         style={[
//           styles.button,
//           isEditing ? styles.saveButton : styles.editButton,
//         ]}
//         onPress={handleEditToggle}>
//         <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default ResumeTemplate1;

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#ffffff',
//     paddingBottom: 20,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: 14,
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   experienceItem: {
//     marginBottom: 8,
//   },
//   experienceTitle: {
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   experiencePosition: {
//     fontSize: 10,
//     fontStyle: 'italic',
//   },
//   experienceDates: {
//     fontSize: 10,
//     color: 'gray',
//   },
//   experienceLocation: {
//     fontSize: 10,
//     fontWeight: '600',
//   },

//   contact: {
//     fontSize: 10,
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   section: {
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginBottom: 3,
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//     paddingBottom: 2,
//   },
//   input: {
//     fontSize: 10,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginVertical: 5,
//   },
//   button: {
//     marginTop: 20,
//     marginBottom: 20,
//     alignSelf: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   editButton: {
//     backgroundColor: '#007bff',
//   },
//   saveButton: {
//     backgroundColor: '#28a745',
//   },
// sectionContent: {
//   fontSize: 10,
//   textAlign: 'justify',
// },
//   skillsContent: {
//     fontSize: 10,
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
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as FileSystem from 'react-native-fs';

const ResumeTemplate1 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: 'JONATHAN WRIGHT',
    title: 'Lead Business Analyst',
    contact:
      '+1-921-389-0182 • name@gmail.com • linkedin.com/in/jonwright • Dallas, TX',
    summary:
      'I am an experienced Business Analyst with a strong technical background and great project management skills...',
    skills:
      'Business: Budgeting • Financial Analysis • Project Management • Stakeholder Management • Business Strategy\nTechnology: Excel • VBA • SQL • QuickBooks • Power BI • Tableau • Python',
    experience: [
      {
        jobTitle: 'Network Solutions LLC',
        jobPosition: 'Lead Business Analyst & Project Manager',
        jobLocation: 'Dallas, TX',
        jobDates: '2019 - Ongoing',
        jobDescription:
          '• Created new strategies to manage $2 million of accounts at risk, resulting in an increase of 4% in revenue in 6 months...',
      },
      {
        jobPosition: 'Senior Business Analyst',
        jobDates: '2017 - 2019',
        jobDescription:
          '• Through an improved pricing model, increased gross revenue of 15% in 2018 compared to 2017 with no change to fixed costs...',
      },
    ],
    education: [
      'University of Wisconsin\nM.Sc. in Finance\n2012 - 2013',
      'University of Wisconsin\nBBA: Business, Supply Chain Management\n2008 - 2012',
    ],
    courses:
      'PMI Professional in Business Analysis (PBA) — PMI, 2019\nCertified Associate in Project Management (CAPM) — PMI, 2018\nHigh-Dimensional Data Analysis — Harvard, 2017',
    hobbies:
      'Giving back to my community\nWith my two kids, I spend at least one day each month volunteering...',
  });

  const handleEditToggle = async () => {
    if (isEditing) {
      // If in editing mode, save and generate PDF when saving
      await generatePDF();
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (key: string, value: string) => {
    setResumeData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const generatePDF = async () => {
    try {
      const htmlContent = `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1, h2 { text-align: center; }
            .section { margin-bottom: 20px; }
            .title { font-weight: bold; font-size: 14px; }
            .content { font-size: 12px; }
          </style>
        </head>
        <body>
          <h1>${resumeData.name}</h1>
          <h2>${resumeData.title}</h2>
          <p style="text-align:center;">${resumeData.contact}</p>

          <div class="section">
            <h3>Summary</h3>
            <p class="content">${resumeData.summary}</p>
          </div>

          <div class="section">
            <h3>Skills</h3>
            <p class="content">${resumeData.skills.replace(/\n/g, '<br>')}</p>
          </div>

          <div class="section">
            <h3>Experience</h3>
            ${resumeData.experience
              .map(
                exp => `
                  <p class="title">${exp.jobTitle} - ${exp.jobPosition}</p>
                  <p class="content">${exp.jobLocation} | ${exp.jobDates}</p>
                  <p class="content">${exp.jobDescription}</p>
                `,
              )
              .join('')}
          </div>

          <div class="section">
            <h3>Education</h3>
            ${resumeData.education
              .map(
                edu => `<p class="content">${edu.replace(/\n/g, '<br>')}</p>`,
              )
              .join('')}
          </div>

          <div class="section">
            <h3>Courses</h3>
            <p class="content">${resumeData.courses.replace(/\n/g, '<br>')}</p>
          </div>

          <div class="section">
            <h3>Hobbies</h3>
            <p class="content">${resumeData.hobbies.replace(/\n/g, '<br>')}</p>
          </div>
        </body>
        </html>
      `;

      const filePath = `${FileSystem.DownloadDirectoryPath}/Resume.pdf`;

      const options = {
        html: htmlContent,
        fileName: 'Resume',
        directory: 'Download',
      };

      const pdf = await RNHTMLtoPDF.convert(options);
      Alert.alert('Success', `Resume saved at: ${pdf.filePath}`);
    } catch (error) {
      console.error('PDF Generation Error:', error);
      Alert.alert('Error', 'Failed to generate PDF.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={resumeData.name}
          onChangeText={text => handleChange('name', text)}
        />
      ) : (
        <Text style={styles.name}>{resumeData.name}</Text>
      )}

      {isEditing ? (
        <TextInput
          style={styles.input}
          value={resumeData.title}
          onChangeText={text => handleChange('title', text)}
        />
      ) : (
        <Text style={styles.title}>{resumeData.title}</Text>
      )}

      {isEditing ? (
        <TextInput
          style={styles.input}
          value={resumeData.contact}
          onChangeText={text => handleChange('contact', text)}
        />
      ) : (
        <Text style={styles.contact}>{resumeData.contact}</Text>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            multiline
            value={resumeData.summary}
            onChangeText={text => handleChange('summary', text)}
          />
        ) : (
          <Text style={styles.sectionContent}>{resumeData.summary}</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            multiline
            value={resumeData.skills}
            onChangeText={text => handleChange('skills', text)}
          />
        ) : (
          <Text style={styles.sectionContent}>{resumeData.skills}</Text>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          isEditing ? styles.saveButton : styles.editButton,
        ]}
        onPress={handleEditToggle}>
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResumeTemplate1;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
    paddingBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
  },
  input: {
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
  sectionContent: {
    fontSize: 10,
    textAlign: 'justify',
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#007bff',
  },
  saveButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
