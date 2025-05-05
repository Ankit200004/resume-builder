// import React from 'react';
// import {StyleSheet, Text, View, ScrollView} from 'react-native';

// const CoverLetterTemplate4 = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Sidebar Section */}
//       <View style={styles.sidebar}>
//         <Text style={styles.sidebarName}>Ethel J. Ludlum</Text>
//         <Text style={styles.sidebarTitle}>Financial Analyst</Text>
//         <View style={styles.sidebarInfoSection}>
//           <Text style={styles.sidebarHeading}>Personal Info</Text>
//           <Text style={styles.sidebarText}>Phone</Text>
//           <Text style={styles.sidebarValue}>904-278-5735</Text>
//           <Text style={styles.sidebarText}>Email</Text>
//           <Text style={styles.sidebarValue}>etheljludlum@email.com</Text>
//         </View>
//       </View>

//       {/* Letter Section */}
//       <View style={styles.letterSection}>
//         <Text style={styles.date}>2022-03-06</Text>

//         <Text style={styles.recipient}>Melvin L. Sparks</Text>
//         <Text style={styles.recipient}>Head of Recruitment</Text>
//         <Text style={styles.recipient}>Refinance</Text>
//         <Text style={styles.recipient}>4809 Mill Street</Text>
//         <Text style={styles.recipient}>Arcadia, FL 33821</Text>

//         <Text style={styles.greeting}>Dear Melvin,</Text>

//         <Text style={styles.paragraph}>
//           It is my pleasure to apply for the Financial Analyst position at
//           Refinance. Thanks to my 3+ years of experience as a junior financial
//           analyst and my Bachelor's degree in Economics, I am more than
//           confident that I could make an immediate impact at Refinance.
//         </Text>

//         <Text style={styles.paragraph}>
//           While earning my degree at the University of Florida, I have gained
//           skills and knowledge that make me a strong candidate for this
//           position, including financial accounting. What is more, my 4.0 GPA and
//           a Dean’s List award for two consecutive years should not escape your
//           notice, as I am a dedicated individual striving for excellence in
//           everything I do.
//         </Text>

//         <Text style={styles.paragraph}>
//           My passion for finance and genuine desire to succeed has led me to
//           apply for this job. I would bring quality customer service, utmost
//           accuracy, and a research-based approach to clients’ matters. At KPMG,
//           I initiated and led a business-specific research project for a client,
//           making 3+ recommendations that the client successfully adopted.
//         </Text>

//         <Text style={styles.paragraph}>
//           Your company’s dedication to driving excellence for your clients is
//           admired in the highest circles. There is no higher pleasure than to
//           work for a company that is always opting for the most innovative
//           alternatives in business finance.
//         </Text>

//         <Text style={styles.paragraph}>
//           I would be eager to discuss how my experience and knowledge could
//           contribute to Refinance’s operations. Please let me know when we can
//           schedule a meeting where I would be ready to explain my approach to
//           trend analysis and forecasting.
//         </Text>

//         <Text style={styles.closing}>With best regards,</Text>
//         <Text style={styles.signature}>Ethel J. Ludlum</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default CoverLetterTemplate4;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#f9f9f9',
//     padding: 10,
//   },
//   sidebar: {
//     width: '30%',
//     backgroundColor: '#002060',
//     padding: 10,
//     borderRadius: 5,
//   },
//   sidebarName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   sidebarTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#ffffff',
//     marginBottom: 20,
//   },
//   sidebarInfoSection: {
//     marginTop: 10,
//   },
//   sidebarHeading: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#ffffff',
//     marginBottom: 5,
//   },
//   sidebarText: {
//     fontSize: 12,
//     color: '#ffffff',
//     marginTop: 10,
//   },
//   sidebarValue: {
//     fontSize: 12,
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
//   letterSection: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
//     marginLeft: 10,
//     elevation: 3,
//   },
//   date: {
//     fontSize: 12,
//     marginBottom: 15,
//     color: '#333',
//   },
//   recipient: {
//     fontSize: 12,
//     color: '#333',
//     marginBottom: 2,
//   },
//   greeting: {
//     fontSize: 12,
//     marginTop: 10,
//     marginBottom: 10,
//     color: '#333',
//   },
//   paragraph: {
//     fontSize: 12,
//     color: '#333',
//     marginBottom: 10,
//     lineHeight: 18,
//   },
//   closing: {
//     fontSize: 12,
//     marginTop: 15,
//     color: '#333',
//   },
//   signature: {
//     fontSize: 12,
//     marginTop: 5,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';

const CoverLetterTemplate4 = () => {
  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State for cover letter content
  const [coverLetter, setCoverLetter] = useState({
    sidebarName: 'Ethel J. Ludlum',
    sidebarTitle: 'Financial Analyst',
    phone: '904-278-5735',
    email: 'etheljludlum@email.com',
    date: '2022-03-06',
    recipient: [
      'Melvin L. Sparks',
      'Head of Recruitment',
      'Refinance',
      '4809 Mill Street',
      'Arcadia, FL 33821',
    ],
    greeting: 'Dear Melvin,',
    paragraphs: [
      "It is my pleasure to apply for the Financial Analyst position at Refinance. Thanks to my 3+ years of experience as a junior financial analyst and my Bachelor's degree in Economics, I am more than confident that I could make an immediate impact at Refinance.",
      'While earning my degree at the University of Florida, I have gained skills and knowledge that make me a strong candidate for this position, including financial accounting. What is more, my 4.0 GPA and a Dean’s List award for two consecutive years should not escape your notice, as I am a dedicated individual striving for excellence in everything I do.',
      'My passion for finance and genuine desire to succeed has led me to apply for this job. I would bring quality customer service, utmost accuracy, and a research-based approach to clients’ matters. At KPMG, I initiated and led a business-specific research project for a client, making 3+ recommendations that the client successfully adopted.',
      'Your company’s dedication to driving excellence for your clients is admired in the highest circles. There is no higher pleasure than to work for a company that is always opting for the most innovative alternatives in business finance.',
      'I would be eager to discuss how my experience and knowledge could contribute to Refinance’s operations. Please let me know when we can schedule a meeting where I would be ready to explain my approach to trend analysis and forecasting.',
    ],
    closing: 'With best regards,',
    signature: 'Ethel J. Ludlum',
  });

  // Generate a PDF from the current cover letter data
  const generateCoverLetterPDF = async () => {
    const htmlContent = `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .sidebar { background-color: #002060; padding: 10px; color: #fff; }
          .sidebarName { font-size: 22px; font-weight: bold; }
          .sidebarTitle { font-size: 16px; font-weight: 600; margin-bottom: 20px; }
          .sidebarInfoSection { margin-top: 10px; }
          .sidebarHeading { font-size: 14px; font-weight: 600; margin-bottom: 5px; }
          .sidebarText { font-size: 12px; margin-top: 10px; }
          .sidebarValue { font-size: 12px; font-weight: bold; }
          .letterSection { background-color: #fff; padding: 10px; margin-top: 10px; }
          .date { font-size: 12px; margin-bottom: 15px; }
          .recipient { font-size: 12px; margin-bottom: 2px; }
          .greeting { font-size: 12px; margin-top: 10px; margin-bottom: 10px; }
          .paragraph { font-size: 12px; margin-bottom: 10px; line-height: 18px; }
          .closing { font-size: 12px; margin-top: 15px; }
          .signature { font-size: 12px; margin-top: 5px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="sidebar">
          <div class="sidebarName">${coverLetter.sidebarName}</div>
          <div class="sidebarTitle">${coverLetter.sidebarTitle}</div>
          <div class="sidebarInfoSection">
            <div class="sidebarHeading">Personal Info</div>
            <div class="sidebarText">Phone</div>
            <div class="sidebarValue">${coverLetter.phone}</div>
            <div class="sidebarText">Email</div>
            <div class="sidebarValue">${coverLetter.email}</div>
          </div>
        </div>
        <div class="letterSection">
          <div class="date">${coverLetter.date}</div>
          ${coverLetter.recipient
            .map(line => `<div class="recipient">${line}</div>`)
            .join('')}
          <div class="greeting">${coverLetter.greeting}</div>
          ${coverLetter.paragraphs
            .map(p => `<div class="paragraph">${p}</div>`)
            .join('')}
          <div class="closing">${coverLetter.closing}</div>
          <div class="signature">${coverLetter.signature}</div>
        </div>
      </body>
      </html>
    `;

    try {
      const pdfFile = await RNHTMLtoPDF.convert({
        html: htmlContent,
        fileName: 'CoverLetter',
        base64: false,
      });
      if (!pdfFile.filePath) {
        throw new Error('PDF generation failed: file path is undefined.');
      }
      const downloadsPath = `${RNFS.DownloadDirectoryPath}/CoverLetter.pdf`;
      await RNFS.moveFile(pdfFile.filePath, downloadsPath);
      Alert.alert('Success', `Cover letter saved to:\n${downloadsPath}`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert(
        'Error',
        'Error generating the cover letter PDF. Please try again.',
      );
    }
  };

  // Toggle the edit mode; if saving, generate PDF and exit edit mode
  const handleToggleEdit = async () => {
    if (isEditing) {
      await generateCoverLetterPDF();
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Sidebar Section */}
        <View style={styles.sidebar}>
          {isEditing ? (
            <TextInput
              style={[styles.sidebarName, {color: '#fff'}]}
              value={coverLetter.sidebarName}
              onChangeText={text =>
                setCoverLetter({...coverLetter, sidebarName: text})
              }
            />
          ) : (
            <Text style={styles.sidebarName}>{coverLetter.sidebarName}</Text>
          )}
          {isEditing ? (
            <TextInput
              style={[styles.sidebarTitle, {color: '#fff'}]}
              value={coverLetter.sidebarTitle}
              onChangeText={text =>
                setCoverLetter({...coverLetter, sidebarTitle: text})
              }
            />
          ) : (
            <Text style={styles.sidebarTitle}>{coverLetter.sidebarTitle}</Text>
          )}
          <View style={styles.sidebarInfoSection}>
            <Text style={styles.sidebarHeading}>Personal Info</Text>
            <Text style={styles.sidebarText}>Phone</Text>
            {isEditing ? (
              <TextInput
                style={[styles.sidebarValue, {color: '#fff'}]}
                value={coverLetter.phone}
                onChangeText={text =>
                  setCoverLetter({...coverLetter, phone: text})
                }
              />
            ) : (
              <Text style={styles.sidebarValue}>{coverLetter.phone}</Text>
            )}
            <Text style={styles.sidebarText}>Email</Text>
            {isEditing ? (
              <TextInput
                style={[styles.sidebarValue, {color: '#fff'}]}
                value={coverLetter.email}
                onChangeText={text =>
                  setCoverLetter({...coverLetter, email: text})
                }
              />
            ) : (
              <Text style={styles.sidebarValue}>{coverLetter.email}</Text>
            )}
          </View>
        </View>

        {/* Letter Section */}
        <View style={styles.letterSection}>
          {isEditing ? (
            <TextInput
              style={styles.date}
              value={coverLetter.date}
              onChangeText={text =>
                setCoverLetter({...coverLetter, date: text})
              }
            />
          ) : (
            <Text style={styles.date}>{coverLetter.date}</Text>
          )}

          {coverLetter.recipient.map((line, index) =>
            isEditing ? (
              <TextInput
                key={index}
                style={styles.recipient}
                value={line}
                onChangeText={text => {
                  const newRecipients = [...coverLetter.recipient];
                  newRecipients[index] = text;
                  setCoverLetter({...coverLetter, recipient: newRecipients});
                }}
              />
            ) : (
              <Text key={index} style={styles.recipient}>
                {line}
              </Text>
            ),
          )}

          {isEditing ? (
            <TextInput
              style={styles.greeting}
              value={coverLetter.greeting}
              onChangeText={text =>
                setCoverLetter({...coverLetter, greeting: text})
              }
            />
          ) : (
            <Text style={styles.greeting}>{coverLetter.greeting}</Text>
          )}

          {coverLetter.paragraphs.map((p, index) =>
            isEditing ? (
              <TextInput
                key={index}
                style={styles.paragraph}
                value={p}
                onChangeText={text => {
                  const newParagraphs = [...coverLetter.paragraphs];
                  newParagraphs[index] = text;
                  setCoverLetter({...coverLetter, paragraphs: newParagraphs});
                }}
                multiline={true}
              />
            ) : (
              <Text key={index} style={styles.paragraph}>
                {p}
              </Text>
            ),
          )}

          {isEditing ? (
            <TextInput
              style={styles.closing}
              value={coverLetter.closing}
              onChangeText={text =>
                setCoverLetter({...coverLetter, closing: text})
              }
            />
          ) : (
            <Text style={styles.closing}>{coverLetter.closing}</Text>
          )}

          {isEditing ? (
            <TextInput
              style={styles.signature}
              value={coverLetter.signature}
              onChangeText={text =>
                setCoverLetter({...coverLetter, signature: text})
              }
            />
          ) : (
            <Text style={styles.signature}>{coverLetter.signature}</Text>
          )}
        </View>
      </ScrollView>

      {/* Toggle Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={handleToggleEdit}>
        <Text style={styles.toggleButtonText}>
          {isEditing ? 'Save' : 'Edit'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoverLetterTemplate4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  contentContainer: {
    padding: 10,
  },
  sidebar: {
    backgroundColor: '#002060',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  sidebarName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 20,
  },
  sidebarInfoSection: {
    marginTop: 10,
  },
  sidebarHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 5,
  },
  sidebarText: {
    fontSize: 12,
    color: '#ffffff',
    marginTop: 10,
  },
  sidebarValue: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  letterSection: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  date: {
    fontSize: 12,
    marginBottom: 15,
    color: '#333',
  },
  recipient: {
    fontSize: 12,
    color: '#333',
    marginBottom: 2,
  },
  greeting: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
    lineHeight: 18,
  },
  closing: {
    fontSize: 12,
    marginTop: 15,
    color: '#333',
  },
  signature: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  toggleButton: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
