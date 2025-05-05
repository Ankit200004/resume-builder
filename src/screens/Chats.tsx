// import React, {useState, useEffect} from 'react';
// import * as GoogleGenerativeAI from '@google/generative-ai';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import RNFS from 'react-native-fs';

// // Type definitions
// interface Message {
//   text: string;
//   user: boolean;
// }

// const Chats = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [userInput, setUserInput] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const [resumeData, setResumeData] = useState<Record<string, string>>({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

//   // Replace with your actual API key
//   const API_KEY = 'AIzaSyCiWQZPmEIRp5Z-g6jSj-QuXtaL1A5Z8M4';

//   // Questions array with key, question, and example fields
//   const questions = [
//     {
//       key: 'name',
//       question: 'What is your full name?',
//       example: 'Example: John Doe',
//     },
//     {
//       key: 'contact',
//       question: 'What is your contact information (email, phone)?',
//       example: 'Example: john.doe@email.com, +1 234 567 890',
//     },
//     {
//       key: 'summary',
//       question: 'Can you provide a summary or objective for your resume?',
//       example:
//         'Example: Motivated software engineer with a passion for building mobile apps.',
//     },
//     {
//       key: 'education',
//       question: 'What is your educational background?',
//       example: 'Example: B.Sc. in Computer Science, XYZ University, 2020',
//     },
//     {
//       key: 'experience',
//       question: 'What work experience do you have?',
//       example:
//         'Example: Software Engineer at ABC Corp (2021-Present) – Developed mobile applications.',
//     },
//     {
//       key: 'skills',
//       question: 'List your skills.',
//       example: 'Example: JavaScript, React, Node.js, Problem-solving',
//     },
//     {
//       key: 'certifications',
//       question: 'Do you have any certifications? (If yes, list them)',
//       example: 'Example: AWS Certified Developer, Google Mobile Web Specialist',
//     },
//     {
//       key: 'projects',
//       question: "Can you list any relevant projects you've worked on?",
//       example:
//         'Example: Built a resume builder app with React Native and Appwrite for backend.',
//     },
//   ];

//   // Start the conversation with a greeting header and first question
//   const startConversation = () => {
//     setMessages([
//       {text: 'Welcome to the ATS Resume Builder Chatbot!', user: false},
//       {text: questions[0].question, user: false},
//       {text: `Hint: ${questions[0].example}`, user: false},
//     ]);
//   };

//   useEffect(() => {
//     startConversation();
//   }, []);

//   // Generic Gemini function that accepts a custom prompt
//   const generateGeminiContent = async (prompt: string): Promise<string> => {
//     try {
//       const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(
//         'AIzaSyCiWQZPmEIRp5Z-g6jSj-QuXtaL1A5Z8M4',
//       );
//       const model = genAI.getGenerativeModel({model: 'gemini-pro'});
//       const result = await model.generateContent(prompt);
//       return result.response.text();
//     } catch (error) {
//       console.error('Error with Gemini response:', error);
//       return 'Sorry, something went wrong while processing your resume details.';
//     }
//   };

//   // Send user message, store the answer, and move to the next question
//   const sendMessage = async () => {
//     if (!userInput.trim()) return;
//     setLoading(true);

//     const userMessage = {text: userInput.trim(), user: true};
//     setMessages(prevMessages => [...prevMessages, userMessage]);

//     // Store answer based on question key
//     const currentKey = questions[currentQuestionIndex].key;
//     setResumeData(prevData => ({
//       ...prevData,
//       [currentKey]: userInput.trim(),
//     }));

//     setUserInput('');
//     setLoading(false);

//     // Move to next question or generate resume if done
//     if (currentQuestionIndex < questions.length - 1) {
//       const nextQuestionIndex = currentQuestionIndex + 1;
//       setMessages(prevMessages => [
//         ...prevMessages,
//         {text: questions[nextQuestionIndex].question, user: false},
//         {text: `Hint: ${questions[nextQuestionIndex].example}`, user: false},
//       ]);
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       await generateResume();
//     }
//   };

//   // Generate ATS-friendly resume using Gemini and then create a styled PDF
//   const generateResume = async () => {
//     setLoading(true);
//     // Build a prompt for Gemini using the collected resumeData
//     const resumePrompt = `Generate an ATS-friendly resume based on the following details. Format the resume with clear sections for Contact Information, Summary, Education, Work Experience, Skills, Certifications, and Projects. Ensure it is optimized for Applicant Tracking Systems and professionally formatted.

// Details:
// Name: ${resumeData.name || ''}
// Contact: ${resumeData.contact || ''}
// Summary: ${resumeData.summary || ''}
// Education: ${resumeData.education || ''}
// Work Experience: ${resumeData.experience || ''}
// Skills: ${resumeData.skills || ''}
// Certifications: ${resumeData.certifications || ''}
// Projects: ${resumeData.projects || ''}`;

//     // Get ATS-optimized resume text from Gemini
//     const atsResumeText = await generateGeminiContent(resumePrompt);

//     // Create a professionally styled HTML resume template
//     const htmlContent = `
//       <html>
//       <head>
//         <style>
//           body { font-family: 'Arial', sans-serif; margin: 40px; color: #333; }
//           .header { text-align: center; border-bottom: 2px solid #4CAF50; padding-bottom: 10px; margin-bottom: 20px; }
//           .header h1 { color: #4CAF50; margin: 0; }
//           .section { margin-bottom: 20px; }
//           .section h2 { color: #007bff; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
//           .section pre { font-size: 12px; white-space: pre-wrap; word-wrap: break-word; }
//         </style>
//       </head>
//       <body>
//         <div class="header">
//           <h1>Resume</h1>
//         </div>
//         <div class="section">
//           <h2>ATS-Friendly Resume</h2>
//           <pre>${atsResumeText}</pre>
//         </div>
//       </body>
//       </html>
//     `;

//     try {
//       const pdfFile = await RNHTMLtoPDF.convert({
//         html: htmlContent,
//         fileName: 'ATS_Resume',
//         base64: false,
//       });

//       if (!pdfFile.filePath) {
//         throw new Error('PDF generation failed: file path is undefined.');
//       }

//       // Save the PDF to the Downloads folder
//       const downloadsPath = `${RNFS.DownloadDirectoryPath}/ATS_Resume.pdf`;
//       await RNFS.moveFile(pdfFile.filePath, downloadsPath);

//       setMessages(prevMessages => [
//         ...prevMessages,
//         {
//           text: `Your ATS-friendly resume has been generated and saved to Downloads.\nPath: ${downloadsPath}`,
//           user: false,
//         },
//       ]);
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       setMessages(prevMessages => [
//         ...prevMessages,
//         {
//           text: 'Error generating the resume PDF. Please try again.',
//           user: false,
//         },
//       ]);
//     }
//     setLoading(false);
//   };

//   // Reset the conversation and start over
//   const resetConversation = () => {
//     setMessages([]);
//     setResumeData({});
//     setCurrentQuestionIndex(0);
//     setUserInput('');
//     startConversation();
//   };

//   // Render each chat message
//   const renderMessage = ({item}: {item: Message}) => (
//     <View
//       style={[
//         styles.messageContainer,
//         item.user ? styles.userMessageContainer : styles.botMessageContainer,
//       ]}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.chatHeader}>
//         <Text style={styles.chatHeaderText}>ATS Resume Builder Chatbot</Text>
//       </View>
//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={(_, index) => index.toString()}
//         style={styles.chatContainer}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Type your response..."
//           onChangeText={setUserInput}
//           value={userInput}
//           onSubmitEditing={sendMessage}
//           style={styles.input}
//           placeholderTextColor="#666"
//         />
//         <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={resetConversation} style={styles.resetButton}>
//         <Text style={styles.resetButtonText}>Reset Chat</Text>
//       </TouchableOpacity>
//       {loading && (
//         <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eef2f5',
//     paddingTop: 40,
//   },
//   chatHeader: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//   },
//   chatHeaderText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   chatContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   messageContainer: {
//     marginBottom: 10,
//     maxWidth: '80%',
//     padding: 10,
//     borderRadius: 8,
//   },
//   userMessageContainer: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#4CAF50',
//   },
//   botMessageContainer: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#007bff',
//   },
//   messageText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     fontSize: 16,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   resetButton: {
//     backgroundColor: '#f44336',
//     borderRadius: 5,
//     margin: 10,
//     paddingVertical: 10,
//   },
//   resetButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   loader: {
//     marginVertical: 10,
//   },
// });

// export default Chats;

import React, {useState, useEffect} from 'react';
import * as GoogleGenerativeAI from '@google/generative-ai';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import RNFS from 'react-native-fs';

// Type definitions
interface Message {
  text: string;
  user: boolean;
}

const Chats = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Replace with your actual API key
  const API_KEY = 'AIzaSyCiWQZPmEIRp5Z-g6jSj-QuXtaL1A5Z8M4';

  // Questions array with key, question, and example fields
  const questions = [
    {
      key: 'name',
      question: 'What is your full name?',
      example: 'Example: John Doe',
    },
    {
      key: 'contact',
      question: 'What is your contact information (email, phone)?',
      example: 'Example: john.doe@email.com, +1 234 567 890',
    },
    {
      key: 'summary',
      question: 'Can you provide a summary or objective for your resume?',
      example:
        'Example: Motivated software engineer with a passion for building mobile apps.',
    },
    {
      key: 'education',
      question: 'What is your educational background?',
      example: 'Example: B.Sc. in Computer Science, XYZ University, 2020',
    },
    {
      key: 'experience',
      question: 'What work experience do you have?',
      example:
        'Example: Software Engineer at ABC Corp (2021-Present) – Developed mobile applications.',
    },
    {
      key: 'skills',
      question: 'List your skills.',
      example: 'Example: JavaScript, React, Node.js, Problem-solving',
    },
    {
      key: 'certifications',
      question: 'Do you have any certifications? (If yes, list them)',
      example: 'Example: AWS Certified Developer, Google Mobile Web Specialist',
    },
    {
      key: 'projects',
      question: "Can you list any relevant projects you've worked on?",
      example:
        'Example: Built a resume builder app with React Native and Appwrite for backend.',
    },
  ];

  // Start the conversation with a greeting header and first question
  const startConversation = () => {
    setMessages([
      {text: 'Welcome to the ATS Resume Builder Chatbot!', user: false},
      {text: questions[0].question, user: false},
      {text: `Hint: ${questions[0].example}`, user: false},
    ]);
  };

  useEffect(() => {
    startConversation();
  }, []);

  // Gemini function that accepts a custom prompt and returns the cleaned and formatted resume text
  const generateGeminiContent = async (prompt: string): Promise<string> => {
    try {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({model: 'gemini-pro'});
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Error with Gemini response:', error);
      return 'Sorry, something went wrong while processing your resume details.';
    }
  };

  // Send user message, store the answer, and move to the next question
  const sendMessage = async () => {
    if (!userInput.trim()) return;
    setLoading(true);

    const userMessage = {text: userInput.trim(), user: true};
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Store answer based on question key
    const currentKey = questions[currentQuestionIndex].key;
    setResumeData(prevData => ({
      ...prevData,
      [currentKey]: userInput.trim(),
    }));

    setUserInput('');
    setLoading(false);

    // Move to next question or generate resume if done
    if (currentQuestionIndex < questions.length - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      setMessages(prevMessages => [
        ...prevMessages,
        {text: questions[nextQuestionIndex].question, user: false},
        {text: `Hint: ${questions[nextQuestionIndex].example}`, user: false},
      ]);
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      await generateResume();
    }
  };

  // Generate ATS-friendly resume using Gemini to clean up and format the resume details,
  // then create a styled PDF that looks like a real, professional resume.
  const generateResume = async () => {
    setLoading(true);
    // Build a prompt for Gemini using the collected resumeData
    const resumePrompt = `Please review the following resume details provided by the user. Remove any grammatical errors and enhance the clarity of the information. Based on these details, generate a polished, professional resume that includes the following sections: 

1. Contact Information (Name, Email, Phone)
2. Summary/Objective
3. Education
4. Work Experience
5. Skills
6. Certifications
7. Projects

Ensure the resume is formatted realistically and is ready for submission to potential employers.

Details:
Name: ${resumeData.name || ''}
Contact: ${resumeData.contact || ''}
Summary: ${resumeData.summary || ''}
Education: ${resumeData.education || ''}
Work Experience: ${resumeData.experience || ''}
Skills: ${resumeData.skills || ''}
Certifications: ${resumeData.certifications || ''}
Projects: ${resumeData.projects || ''}`;

    // Get ATS-optimized and grammatically corrected resume text from Gemini
    const atsResumeText = await generateGeminiContent(resumePrompt);

    // Create a professionally styled HTML resume template
    const htmlContent = `
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 40px; color: #333; }
          .header { text-align: center; border-bottom: 2px solid #4CAF50; padding-bottom: 10px; margin-bottom: 20px; }
          .header h1 { color: #4CAF50; margin: 0; }
          .section { margin-bottom: 20px; }
          .section h2 { color: #007bff; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
          .content { font-size: 14px; line-height: 1.5; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Professional Resume</h1>
        </div>
        <div class="section">
          <h2>Resume Details</h2>
          <div class="content">${atsResumeText}</div>
        </div>
      </body>
      </html>
    `;

    try {
      const pdfFile = await RNHTMLtoPDF.convert({
        html: htmlContent,
        fileName: 'ATS_Resume',
        base64: false,
      });

      if (!pdfFile.filePath) {
        throw new Error('PDF generation failed: file path is undefined.');
      }

      // Save the PDF to the Downloads folder
      const downloadsPath = `${RNFS.DownloadDirectoryPath}/ATS_Resume.pdf`;
      await RNFS.moveFile(pdfFile.filePath, downloadsPath);

      setMessages(prevMessages => [
        ...prevMessages,
        {
          text: `Your professional ATS-friendly resume has been generated and saved to Downloads.\nPath: ${downloadsPath}`,
          user: false,
        },
      ]);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          text: 'Error generating the resume PDF. Please try again.',
          user: false,
        },
      ]);
    }
    setLoading(false);
  };

  // Reset the conversation and start over
  const resetConversation = () => {
    setMessages([]);
    setResumeData({});
    setCurrentQuestionIndex(0);
    setUserInput('');
    startConversation();
  };

  // Render each chat message
  const renderMessage = ({item}: {item: Message}) => (
    <View
      style={[
        styles.messageContainer,
        item.user ? styles.userMessageContainer : styles.botMessageContainer,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatHeaderText}>ATS Resume Builder Chatbot</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(_, index) => index.toString()}
        style={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your response..."
          onChangeText={setUserInput}
          value={userInput}
          onSubmitEditing={sendMessage}
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={resetConversation} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Chat</Text>
      </TouchableOpacity>
      {loading && (
        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    paddingTop: 40,
  },
  chatHeader: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  chatHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    maxWidth: '80%',
    padding: 10,
    borderRadius: 8,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#007bff',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    margin: 10,
    paddingVertical: 10,
  },
  resetButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  loader: {
    marginVertical: 10,
  },
});

export default Chats;
