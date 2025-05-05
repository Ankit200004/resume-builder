// import React, {useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import {
//   launchCamera,
//   launchImageLibrary,
//   CameraOptions,
//   ImagePickerResponse,
// } from 'react-native-image-picker';
// import ViewShot from 'react-native-view-shot';
// // Use a namespace import for RNFS to avoid "Cannot find name" errors
// import * as RNFS from 'react-native-fs';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';

// const ResumeTemplate3 = () => {
//   const [profileImageUri, setProfileImageUri] = useState(
//     'https://insertface.com/fb/1374/formal-attire-man-resume-1374177-ixymu-fb.jpg',
//   );
//   const [name, setName] = useState('John Smith');
//   const [title, setTitle] = useState('Senior Software Engineer');
//   const [email, setEmail] = useState('john.smith@email.com');
//   const [phone, setPhone] = useState('555-555-5555');
//   const [location, setLocation] = useState('Boston, MA');
//   const [profile, setProfile] = useState(
//     'Experienced software engineer with expertise in web development and AI.',
//   );
//   const [education, setEducation] = useState(
//     'Massachusetts Institute of Technology (MIT)\nBachelor of Science in Computer Science\n2019-2023\nRelevant Coursework Includes: Data Structures, Algorithms, Computer Systems, and Machine Learning',
//   );
//   const [experience, setExperience] = useState(
//     'Software Development Intern, ABC Company, Summer 2021\n- Developed and maintained web applications using Java and Spring Framework.\n\nResearch Assistant, MIT Computer Science Department, Fall 2021\n- Conducted research in AI and wrote detailed reports.',
//   );
//   const [skills, setSkills] = useState(
//     '- Proficient in Java, Python, and C++\n- Strong understanding of algorithms\n- Skilled in web development (HTML, CSS, JS)\n- Familiar with TensorFlow and scikit-learn',
//   );
//   const [isEditing, setIsEditing] = useState(true);

//   const viewShotRef = useRef<ViewShot | null>(null);

//   const handleImagePick = (source: 'camera' | 'library') => {
//     const options: CameraOptions = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     const callback = (response: ImagePickerResponse) => {
//       if (response.assets && response.assets[0]) {
//         setProfileImageUri(response.assets[0].uri || '');
//       }
//     };

//     if (source === 'camera') {
//       launchCamera(options, callback);
//     } else {
//       launchImageLibrary(options, callback);
//     }
//   };

//   const generatePDF = async () => {
//     try {
//       // Define fixed dimensions for an A4 page in points:
//       // A4 portrait is approximately 595 x 842 points.
//       // If your resume is long, increase the height to capture all the content.
//       const pageWidth = 595;
//       const pageHeight = 842 * 2; // For example, using two A4 pages worth of height

//       // Create HTML content without a meta viewport tag (which can trigger scaling)
//       const htmlContent = `
//       <html>
//         <head>
//           <style>
//             @page { size: A4; margin: 20px; }
//             body {
//               font-family: Arial, sans-serif;
//               margin: 0;
//               padding: 0;
//               background-color: #f5f5f5;
//               color: #424242;
//             }
//             h1, h2 {
//               color: #333;
//             }
//             .container {
//               display: flex;
//               flex-direction: row;
//               margin: 20px;
//               background-color: white;
//               padding: 20px;
//               border-radius: 10px;
//               box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//               /* Ensure the container uses at least the available height */
//               min-height: ${pageHeight - 40}px;
//             }
//             .leftColumn {
//               width: 35%;
//               background-color: #e3f2fd;
//               padding: 10px;
//               text-align: center;
//             }
//             .profileImage {
//               width: 100px;
//               height: 100px;
//               border-radius: 50%;
//             }
//             .rightColumn {
//               width: 65%;
//               padding: 10px;
//             }
//             .section {
//               margin-bottom: 20px;
//             }
//             .sectionTitle {
//               font-size: 14px;
//               font-weight: bold;
//               margin-bottom: 8px;
//             }
//             .contactInfo, .text {
//               font-size: 12px;
//               border-bottom: 1px solid #ddd;
//               padding: 5px;
//               margin-bottom: 10px;
//             }
//             .contactInfo {
//               text-align: center;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="leftColumn">
//               <img src="${profileImageUri}" alt="Profile Image" class="profileImage" />
//               <div class="contactSection">
//                 <p class="contactInfo"><strong>Email:</strong> ${email}</p>
//                 <p class="contactInfo"><strong>Phone:</strong> ${phone}</p>
//                 <p class="contactInfo"><strong>Location:</strong> ${location}</p>
//               </div>
//               <div class="section">
//                 <p class="sectionTitle">Profile</p>
//                 <p class="text">${profile}</p>
//               </div>
//             </div>
//             <div class="rightColumn">
//               <p class="name"><strong>${name}</strong></p>
//               <p class="title">${title}</p>
//               <div class="section">
//                 <p class="sectionTitle">Education</p>
//                 <p class="text">${education}</p>
//               </div>
//               <div class="section">
//                 <p class="sectionTitle">Experience</p>
//                 <p class="text">${experience}</p>
//               </div>
//               <div class="section">
//                 <p class="sectionTitle">Skills</p>
//                 <p class="text">${skills}</p>
//               </div>
//             </div>
//           </div>
//         </body>
//       </html>
//       `;

//       const pdfOptions = {
//         html: htmlContent,
//         fileName: 'Resume',
//         directory: 'Documents',
//         width: pageWidth, // Set the page width (in points)
//         height: pageHeight, // Set the page height (in points)
//         // Uncomment the next line to try landscape mode if it better suits your layout:
//         // landscape: true,
//       };

//       const file = await RNHTMLtoPDF.convert(pdfOptions);
//       const filePath = file.filePath;
//       if (!filePath) {
//         throw new Error('File path is undefined');
//       }
//       Alert.alert('Success', `PDF saved at: ${filePath}`);
//       console.log('PDF saved at:', filePath);

//       const fileExists = await RNFS.exists(filePath);
//       console.log(
//         fileExists
//           ? 'File exists at: ' + filePath
//           : 'File not found at the expected path',
//       );
//     } catch (error) {
//       Alert.alert('Error', 'Failed to generate PDF');
//       console.error('Error generating PDF:', error);
//     }
//   };

//   const toggleEditMode = () => {
//     if (isEditing) {
//       generatePDF();
//     }
//     setIsEditing(!isEditing);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.outerContainer}>
//       <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 1}}>
//         <View style={styles.container}>
//           <View style={styles.leftColumn}>
//             <TouchableOpacity onPress={() => handleImagePick('library')}>
//               <Image
//                 source={{uri: profileImageUri}}
//                 style={styles.profileImage}
//               />
//             </TouchableOpacity>
//             <View style={styles.contactSection}>
//               <TextInput
//                 style={styles.contactInfo}
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder="Email"
//                 editable={isEditing}
//               />
//               <TextInput
//                 style={styles.contactInfo}
//                 value={phone}
//                 onChangeText={setPhone}
//                 placeholder="Phone"
//                 editable={isEditing}
//               />
//               <TextInput
//                 style={styles.contactInfo}
//                 value={location}
//                 onChangeText={setLocation}
//                 placeholder="Location"
//                 editable={isEditing}
//               />
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Profile</Text>
//               <TextInput
//                 style={styles.text}
//                 value={profile}
//                 onChangeText={setProfile}
//                 placeholder="Profile summary"
//                 multiline
//                 editable={isEditing}
//               />
//             </View>
//           </View>
//           <View style={styles.rightColumn}>
//             <TextInput
//               style={styles.name}
//               value={name}
//               onChangeText={setName}
//               placeholder="Full Name"
//               editable={isEditing}
//             />
//             <TextInput
//               style={styles.title}
//               value={title}
//               onChangeText={setTitle}
//               placeholder="Job Title"
//               editable={isEditing}
//             />
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Education</Text>
//               <TextInput
//                 style={styles.text}
//                 value={education}
//                 onChangeText={setEducation}
//                 placeholder="Education details"
//                 multiline
//                 editable={isEditing}
//               />
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Experience</Text>
//               <TextInput
//                 style={styles.text}
//                 value={experience}
//                 onChangeText={setExperience}
//                 placeholder="Work experience"
//                 multiline
//                 editable={isEditing}
//               />
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Skills</Text>
//               <TextInput
//                 style={styles.text}
//                 value={skills}
//                 onChangeText={setSkills}
//                 placeholder="Skills"
//                 multiline
//                 editable={isEditing}
//               />
//             </View>
//           </View>
//         </View>
//       </ViewShot>
//       <TouchableOpacity style={styles.downloadButton} onPress={toggleEditMode}>
//         <Text style={styles.downloadText}>
//           {isEditing ? 'Generate PDF' : 'Download PDF'}
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     width: Dimensions.get('window').width - 20,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   leftColumn: {
//     width: '35%',
//     backgroundColor: '#e3f2fd',
//     padding: 10,
//     alignItems: 'center',
//   },
//   rightColumn: {
//     width: '65%',
//     padding: 10,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 16,
//     color: '#757575',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   contactSection: {
//     marginBottom: 15,
//   },
//   contactInfo: {
//     textAlign: 'center',
//     marginBottom: 3,
//     fontSize: 12,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//   },
//   section: {
//     marginBottom: 8,
//   },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   text: {
//     fontSize: 12,
//     color: '#424242',
//     textAlign: 'justify',
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//   },
//   downloadButton: {
//     marginTop: 20,
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//   },
//   downloadText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ResumeTemplate3;

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import ViewShot from 'react-native-view-shot';
import * as RNFS from 'react-native-fs';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const ResumeTemplate3 = () => {
  const [profileImageUri, setProfileImageUri] = useState(
    'https://insertface.com/fb/1374/formal-attire-man-resume-1374177-ixymu-fb.jpg',
  );
  const [name, setName] = useState('John Smith');
  const [title, setTitle] = useState('Senior Software Engineer');
  const [email, setEmail] = useState('john.smith@email.com');
  const [phone, setPhone] = useState('555-555-5555');
  const [location, setLocation] = useState('Boston, MA');
  const [profile, setProfile] = useState(
    'Experienced software engineer with expertise in web development and AI.',
  );
  const [education, setEducation] = useState(
    'Massachusetts Institute of Technology (MIT)\nBachelor of Science in Computer Science\n2019-2023\nRelevant Coursework Includes: Data Structures, Algorithms, Computer Systems, and Machine Learning',
  );
  const [experience, setExperience] = useState(
    'Software Development Intern, ABC Company, Summer 2021\n- Developed and maintained web applications using Java and Spring Framework.\n\nResearch Assistant, MIT Computer Science Department, Fall 2021\n- Conducted research in AI and wrote detailed reports.',
  );
  const [skills, setSkills] = useState(
    '- Proficient in Java, Python, and C++\n- Strong understanding of algorithms\n- Skilled in web development (HTML, CSS, JS)\n- Familiar with TensorFlow and scikit-learn',
  );
  const [certifications, setCertifications] = useState(
    '- AWS Certified Solutions Architect\n- Google Professional Data Engineer',
  );
  const [languages, setLanguages] = useState(
    '- English (Fluent)\n- Spanish (Intermediate)',
  );
  const [projects, setProjects] = useState(
    'Personal Portfolio Website\n- Built a responsive portfolio using React and Tailwind CSS.\n\nAI Chatbot\n- Developed a chatbot using Python and TensorFlow.',
  );
  const [isEditing, setIsEditing] = useState(true);

  const viewShotRef = useRef<ViewShot | null>(null);

  const handleImagePick = (source: 'camera' | 'library') => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1,
    };

    const callback = (response: ImagePickerResponse) => {
      if (response.assets && response.assets[0]) {
        setProfileImageUri(response.assets[0].uri || '');
      }
    };

    if (source === 'camera') {
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  };

  const generatePDF = async () => {
    try {
      const pageWidth = 595;
      const pageHeight = 842 * 2; // Two A4 pages worth of height

      const htmlContent = `
      <html>
        <head>
          <style>
            @page { size: A4; margin: 20px; }
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              color: #424242;
            }
            h1, h2 {
              color: #333;
            }
            .container {
              display: flex;
              flex-direction: row;
              margin: 20px;
              background-color: white;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
              min-height: ${pageHeight - 40}px;
            }
            .leftColumn {
              width: 35%;
              background-color: #f8f9fa;
              padding: 20px;
              text-align: center;
            }
            .profileImage {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              margin-bottom: 20px;
            }
            .rightColumn {
              width: 65%;
              padding: 20px;
            }
            .section {
              margin-bottom: 20px;
            }
            .sectionTitle {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 10px;
              color: #2c3e50;
              border-bottom: 2px solid #2c3e50;
              padding-bottom: 5px;
            }
            .contactInfo, .text {
              font-size: 12px;
              margin-bottom: 10px;
            }
            .contactInfo {
              text-align: center;
            }
            .name {
              font-size: 24px;
              font-weight: bold;
              text-align: center;
              margin-bottom: 10px;
              color: #2c3e50;
            }
            .title {
              font-size: 18px;
              color: #757575;
              text-align: center;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="leftColumn">
              <img src="${profileImageUri}" alt="Profile Image" class="profileImage" />
              <div class="contactSection">
                <p class="contactInfo"><strong>Email:</strong> ${email}</p>
                <p class="contactInfo"><strong>Phone:</strong> ${phone}</p>
                <p class="contactInfo"><strong>Location:</strong> ${location}</p>
              </div>
              <div class="section">
                <p class="sectionTitle">Profile</p>
                <p class="text">${profile}</p>
              </div>
              <div class="section">
                <p class="sectionTitle">Skills</p>
                <p class="text">${skills}</p>
              </div>
              <div class="section">
                <p class="sectionTitle">Languages</p>
                <p class="text">${languages}</p>
              </div>
              <div class="section">
                <p class="sectionTitle">Certifications</p>
                <p class="text">${certifications}</p>
              </div>
            </div>
            <div class="rightColumn">
              <p class="name">${name}</p>
              <p class="title">${title}</p>
              <div class="section">
                <p class="sectionTitle">Education</p>
                <p class="text">${education}</p>
              </div>
              <div class="section">
                <p class="sectionTitle">Experience</p>
                <p class="text">${experience}</p>
              </div>
              <div class="section">
                <p class="sectionTitle">Projects</p>
                <p class="text">${projects}</p>
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
        width: pageWidth,
        height: pageHeight,
      };

      const file = await RNHTMLtoPDF.convert(pdfOptions);
      const filePath = file.filePath;
      if (!filePath) {
        throw new Error('File path is undefined');
      }
      Alert.alert('Success', `PDF saved at: ${filePath}`);
      console.log('PDF saved at:', filePath);

      const fileExists = await RNFS.exists(filePath);
      console.log(
        fileExists
          ? 'File exists at: ' + filePath
          : 'File not found at the expected path',
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to generate PDF');
      console.error('Error generating PDF:', error);
    }
  };

  const toggleEditMode = () => {
    if (isEditing) {
      generatePDF();
    }
    setIsEditing(!isEditing);
  };

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 1}}>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <TouchableOpacity onPress={() => handleImagePick('library')}>
              <Image
                source={{uri: profileImageUri}}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <View style={styles.contactSection}>
              <TextInput
                style={styles.contactInfo}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                editable={isEditing}
              />
              <TextInput
                style={styles.contactInfo}
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone"
                editable={isEditing}
              />
              <TextInput
                style={styles.contactInfo}
                value={location}
                onChangeText={setLocation}
                placeholder="Location"
                editable={isEditing}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Profile</Text>
              <TextInput
                style={styles.text}
                value={profile}
                onChangeText={setProfile}
                placeholder="Profile summary"
                multiline
                editable={isEditing}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <TextInput
                style={styles.text}
                value={skills}
                onChangeText={setSkills}
                placeholder="Skills"
                multiline
                editable={isEditing}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Languages</Text>
              <TextInput
                style={styles.text}
                value={languages}
                onChangeText={setLanguages}
                placeholder="Languages"
                multiline
                editable={isEditing}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Certifications</Text>
              <TextInput
                style={styles.text}
                value={certifications}
                onChangeText={setCertifications}
                placeholder="Certifications"
                multiline
                editable={isEditing}
              />
            </View>
          </View>
          <View style={styles.rightColumn}>
            <TextInput
              style={styles.name}
              value={name}
              onChangeText={setName}
              placeholder="Full Name"
              editable={isEditing}
            />
            <TextInput
              style={styles.title}
              value={title}
              onChangeText={setTitle}
              placeholder="Job Title"
              editable={isEditing}
            />
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <TextInput
                style={styles.text}
                value={education}
                onChangeText={setEducation}
                placeholder="Education details"
                multiline
                editable={isEditing}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <TextInput
                style={styles.text}
                value={experience}
                onChangeText={setExperience}
                placeholder="Work experience"
                multiline
                editable={isEditing}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects</Text>
              <TextInput
                style={styles.text}
                value={projects}
                onChangeText={setProjects}
                placeholder="Projects"
                multiline
                editable={isEditing}
              />
            </View>
          </View>
        </View>
      </ViewShot>
      <TouchableOpacity style={styles.downloadButton} onPress={toggleEditMode}>
        <Text style={styles.downloadText}>
          {isEditing ? 'Generate PDF' : 'Download PDF'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftColumn: {
    width: '35%',
    backgroundColor: '#f8f9fa',
    padding: 20,
    alignItems: 'center',
  },
  rightColumn: {
    width: '65%',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2c3e50',
  },
  title: {
    fontSize: 18,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactSection: {
    marginBottom: 20,
  },
  contactInfo: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 12,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
    borderBottomWidth: 2,
    borderBottomColor: '#2c3e50',
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    color: '#424242',
    textAlign: 'justify',
  },
  downloadButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  downloadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResumeTemplate3;
