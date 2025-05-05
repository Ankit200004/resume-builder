// import React from 'react';
// import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

// const ResumeTemplate4 = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.leftColumn}>
//         <Image
//           source={{
//             uri: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
//           }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.aboutMeTitle}>ABOUT ME</Text>
//         <Text style={styles.aboutMeText}>
//           A highly skilled graphic designer with 8 years of experience in
//           creating visually engaging designs. Passionate about using design to
//           solve problems and improve user experience.
//         </Text>

//         <Text style={styles.skillsTitle}>SKILLS</Text>
//         <View style={styles.skillItem}>
//           <Text style={styles.skillText}>Graphic Design:</Text>
//           <View style={styles.skillBar}>
//             <View style={[styles.skillLevel, {width: '90%'}]} />
//           </View>
//         </View>
//         <View style={styles.skillItem}>
//           <Text style={styles.skillText}>UI/UX Design:</Text>
//           <View style={styles.skillBar}>
//             <View style={[styles.skillLevel, {width: '80%'}]} />
//           </View>
//         </View>
//         <View style={styles.skillItem}>
//           <Text style={styles.skillText}>Adobe Suite:</Text>
//           <View style={styles.skillBar}>
//             <View style={[styles.skillLevel, {width: '85%'}]} />
//           </View>
//         </View>
//       </View>

//       <View style={styles.rightColumn}>
//         <Text style={styles.name}>AUSTIN BRONSON</Text>
//         <Text style={styles.contactInfo}>
//           Phone: (+0) 1 2345 555{'\n'}
//           Email: contact@yourdomain.com{'\n'}
//           LinkedIn: linkedin.com/in/austinbronson
//         </Text>

//         <Text style={styles.sectionTitle}>EXPERIENCE</Text>
//         <View style={styles.experienceItem}>
//           <Text style={styles.experienceTitle}>
//             SENIOR GRAPHIC DESIGNER (2020 - NOW)
//           </Text>
//           <Text style={styles.experienceText}>
//             • Lead a creative team at XYZ Agency, conceptualizing and executing
//             design strategies for top clients in fashion and technology.{'\n'}•
//             Developed innovative designs that boosted user engagement by 40%.
//             {'\n'}• Managed a team of 5 designers and collaborated with
//             marketing to ensure cohesive brand messaging.
//           </Text>
//         </View>
//         <View style={styles.experienceItem}>
//           <Text style={styles.experienceTitle}>
//             GRAPHIC DESIGNER (2015 - 2020)
//           </Text>
//           <Text style={styles.experienceText}>
//             • Worked on a variety of design projects for clients across multiple
//             industries.{'\n'}• Created branding, web designs, and digital ads,
//             consistently meeting client expectations and deadlines.{'\n'}•
//             Assisted in the design of company-wide campaigns that resulted in a
//             25% increase in overall engagement.
//           </Text>
//         </View>

//         <Text style={styles.sectionTitle}>EDUCATION</Text>
//         <View style={styles.educationItem}>
//           <Text style={styles.educationTitle}>
//             BACHELOR'S IN GRAPHIC DESIGN (2011 - 2014)
//           </Text>
//           <Text style={styles.educationText}>
//             • Graduated with honors from Design University, focusing on visual
//             communication and digital design principles.{'\n'}• Interned at ABC
//             Studios, gaining hands-on experience in professional design
//             workflows.{'\n'}• Completed coursework in typography, UI design, and
//             motion graphics.
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 10,
//     margin: 10,
//   },
//   leftColumn: {
//     flex: 1,
//     paddingRight: 15,
//     backgroundColor: '#2c2c2c',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     alignSelf: 'center',
//     marginBottom: 15,
//   },
//   aboutMeTitle: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   aboutMeText: {
//     color: '#fff',
//     fontSize: 12,
//     marginBottom: 15,
//   },
//   skillsTitle: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   skillItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   skillText: {
//     color: '#fff',
//     fontSize: 12,
//     width: 100,
//   },
//   skillBar: {
//     height: 6,
//     backgroundColor: '#ddd',
//     borderRadius: 5,
//     flex: 1,
//   },
//   skillLevel: {
//     height: 6,
//     backgroundColor: '#f1c40f',
//     borderRadius: 5,
//   },
//   rightColumn: {
//     flex: 2,
//     paddingLeft: 15,
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   contactInfo: {
//     fontSize: 12,
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   experienceItem: {
//     marginBottom: 10,
//   },
//   experienceTitle: {
//     fontSize: 13,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   experienceText: {
//     fontSize: 12,
//     marginBottom: 8,
//   },
//   educationItem: {
//     marginBottom: 10,
//   },
//   educationTitle: {
//     fontSize: 13,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   educationText: {
//     fontSize: 12,
//   },
// });

// export default ResumeTemplate4;
