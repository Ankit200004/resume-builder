// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Dimensions,
//   ScrollView,
// } from 'react-native';

// const {width} = Dimensions.get('window');

// const CoverLetterTemplate3: React.FC = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.outerContainer}>
//         <View style={styles.yellowBorder}></View>
//         <View style={styles.container}>
//           <Text style={styles.name}>Chloe Anderson</Text>
//           <View style={styles.profileContainer}>
//             <View style={styles.contactContainer}>
//               <Text style={styles.contact}>chloe.anderson@email.com</Text>
//               <Text style={styles.contact}>(551) 123-7676</Text>
//               <Text style={styles.contact}>54 Corbett Road, San Francisco</Text>
//               <Text style={styles.contact}>http://www.mywebsite.com</Text>
//             </View>
//             <Image
//               source={{
//                 uri: 'https://t4.ftcdn.net/jpg/05/84/65/25/360_F_584652599_s89lyUhPSMfX5YsRlKsa1AglJT7vNioO.jpg',
//               }}
//               style={styles.profileImage}
//             />
//           </View>
//           <View style={styles.socialMedia}>
//             <Image
//               source={{
//                 uri: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
//               }}
//               style={styles.socialMediaIcon}
//             />
//             <Image
//               source={{
//                 uri: 'https://img.icons8.com/ios-filled/50/000000/facebook.png',
//               }}
//               style={styles.socialMediaIcon}
//             />
//             <Image
//               source={{
//                 uri: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
//               }}
//               style={styles.socialMediaIcon}
//             />
//           </View>

//           <Text style={styles.date}>Date</Text>
//           <Text style={styles.recipient}>
//             Recipient Name{'\n'}
//             Recipient Designation{'\n'}
//             Company Name{'\n'}
//             Recipient Address
//           </Text>

//           <Text style={styles.greeting}>Dear Editor of Recipient Company</Text>
//           <Text style={styles.body}>
//             I am submitting a manuscript for consideration of publication in ABC
//             Journal of Pharmaceutical Sciences. The manuscript is entitled
//             "Preparation of nimodipine microspheres contained in a solid
//             dispersion and evaluation of their in vitro and in vivo
//             characteristics".
//             {'\n\n'}
//             It has not been published elsewhere and that it has not been
//             submitted simultaneously for publication elsewhere.
//             {'\n\n'}
//             Nimodipine was formulated into immediate and sustained release
//             microspheres in a solid dispersion. Two types of microspheres (i.e.
//             immediate release and sustained release microspheres could be
//             successfully prepared through adjustment of the ratio of nimodipine
//             to the functional additives. Following X-ray, DTA and SEM analysis,
//             it was found that nimodipine was highly dispersed and present in the
//             microspheres in an amorphous state.
//             {'\n\n'}
//             Thank you very much for your consideration.
//           </Text>
//           <Text style={styles.closing}>
//             Sincerely,{'\n'}
//             Your Name{'\n'}
//             Chloe Anderson
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     paddingVertical: 20,
//   },
//   outerContainer: {
//     flexDirection: 'row',
//     width: width * 0.9,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     borderColor: '#e0e0e0',
//     borderWidth: 1,
//   },
//   yellowBorder: {
//     width: 10,
//     backgroundColor: '#FFD700',
//     borderTopLeftRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   contactContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   contact: {
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   socialMedia: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 10,
//   },
//   socialMediaIcon: {
//     width: 24,
//     height: 24,
//     marginHorizontal: 10,
//   },
//   date: {
//     fontSize: 12,
//     marginVertical: 10,
//   },
//   recipient: {
//     fontSize: 12,
//     marginBottom: 10,
//   },
//   greeting: {
//     fontSize: 12,
//     marginBottom: 10,
//   },
//   body: {
//     fontSize: 12,
//     textAlign: 'justify',
//     marginBottom: 10,
//   },
//   closing: {
//     fontSize: 12,
//     marginTop: 20,
//   },
// });

// export default CoverLetterTemplate3;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

const CoverLetterTemplate3: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.outerContainer}>
        {/* Yellow accent border */}
        <View style={styles.yellowBorder} />
        {/* Main card container */}
        <View style={styles.container}>
          {/* Header: Name & Profile */}
          <Text style={styles.name}>Chloe Anderson</Text>
          <View style={styles.profileContainer}>
            <View style={styles.contactContainer}>
              <Text style={styles.contact}>chloe.anderson@email.com</Text>
              <Text style={styles.contact}>(551) 123-7676</Text>
              <Text style={styles.contact}>54 Corbett Road, San Francisco</Text>
              <Text style={styles.contact}>www.mywebsite.com</Text>
            </View>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/05/84/65/25/360_F_584652599_s89lyUhPSMfX5YsRlKsa1AglJT7vNioO.jpg',
              }}
              style={styles.profileImage}
            />
          </View>

          {/* Social Media Icons */}
          <View style={styles.socialMedia}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
              }}
              style={styles.socialMediaIcon}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/facebook.png',
              }}
              style={styles.socialMediaIcon}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
              }}
              style={styles.socialMediaIcon}
            />
          </View>

          {/* Letter details */}
          <Text style={styles.date}>March 15, 2025</Text>
          <Text style={styles.recipient}>
            Recipient Name{'\n'}
            Recipient Designation{'\n'}
            Company Name{'\n'}
            Recipient Address
          </Text>

          <Text style={styles.greeting}>Dear Editor of Recipient Company,</Text>

          <Text style={styles.body}>
            I am submitting a manuscript for consideration of publication in ABC
            Journal of Pharmaceutical Sciences. The manuscript is entitled{' '}
            <Text style={styles.italic}>
              "Preparation of Nimodipine Microspheres Contained in a Solid
              Dispersion and Evaluation of Their In Vitro and In Vivo
              Characteristics."
            </Text>
            {'\n\n'}It has not been published elsewhere and has not been
            submitted simultaneously for publication elsewhere. Nimodipine was
            formulated into immediate and sustained release microspheres in a
            solid dispersion. Two types of microspheres (i.e., immediate release
            and sustained release) could be successfully prepared through
            adjustment of the ratio of nimodipine to the functional additives.
            Following X-ray, DTA, and SEM analysis, it was found that nimodipine
            was highly dispersed and present in the microspheres in an amorphous
            state.
            {'\n\n'}Thank you very much for your consideration.
          </Text>

          <Text style={styles.closing}>
            Sincerely,{'\n'}Your Name{'\n'}Chloe Anderson
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CoverLetterTemplate3;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  outerContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  yellowBorder: {
    width: 10,
    backgroundColor: '#FFD700',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactContainer: {
    flex: 1,
    marginRight: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  contact: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  socialMediaIcon: {
    width: 28,
    height: 28,
    marginHorizontal: 10,
  },
  date: {
    fontSize: 12,
    color: '#777',
    marginVertical: 10,
  },
  recipient: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
    lineHeight: 16,
  },
  greeting: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  body: {
    fontSize: 12,
    color: '#444',
    lineHeight: 20,
    textAlign: 'justify',
    marginBottom: 20,
  },
  italic: {
    fontStyle: 'italic',
  },
  closing: {
    fontSize: 12,
    color: '#333',
    marginTop: 20,
    lineHeight: 18,
  },
});
