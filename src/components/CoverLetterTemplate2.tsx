// import {StyleSheet, Text, View, ScrollView} from 'react-native';
// import React from 'react';

// const CoverLetterTemplate1 = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.name}>ROBERT SMITH</Text>
//         <Text style={styles.title}>Professional Organizer</Text>
//       </View>
//       <View style={styles.contact}>
//         <Text style={styles.contactText}>Phone: (123) 456 78 99</Text>
//         <Text style={styles.contactText}>Email: info@qwikresume.com</Text>
//         <Text style={styles.contactText}>Website: www.qwikresume.com</Text>
//         <Text style={styles.contactText}>
//           LinkedIn: linkedin.com/qwikresume
//         </Text>
//         <Text style={styles.contactText}>
//           Address: 1737 Marshville Road, Alabama
//         </Text>
//       </View>
//       <View style={styles.separator} />
//       <View style={styles.body}>
//         <Text style={styles.date}>[Today's Date]</Text>
//         <Text style={styles.recipient}>[341 Company Address]</Text>
//         <Text style={styles.recipient}>[Company City, State xxxxx]</Text>
//         <Text style={styles.recipient}>[(xxx) xxx-xxxx]</Text>
//         <Text style={styles.recipient}>[hiring.manager@gmail.com]</Text>

//         <Text style={styles.greeting}>
//           Dear [Mr./Mrs./Ms.] [Hiring Manager's Name],
//         </Text>
//         <Text style={styles.paragraph}>
//           I'm writing to submit an application for the opening of a Professional
//           Organizer role that was just posted on the organization's website. I
//           have more than five years of experience as a Professional Organizer
//           and a tonne of knowledge about how to assist individuals to clear out
//           the mess in their residences and lifestyles. I'm passionate about
//           assisting individuals in leading more orderly and effective lives, and
//           I think my abilities and expertise would be a great asset to your
//           organization.
//         </Text>
//         <Text style={styles.paragraph}>
//           I've had a successful track record of assisting clients in reaching
//           their organizational objectives. I am understanding and forbearing,
//           yet when required, I can also be tough and forthright. My ability to
//           comprehend the big picture and an acute eye for detail enable me to
//           find alternatives that are specifically tailored to each customer's
//           requirements. In contrast to my Professional Organizing expertise, I
//           have a foundation in marketing and business administration. I have
//           experience with a range of software applications, including Microsoft
//           Office, and I feel at ease handling both electronic and tangible file
//           types. In addition, I have outstanding communication and client
//           assistance skills. Here are some of my professional highlights:
//         </Text>
//         <Text style={styles.listItem}>
//           • My clientele has included individuals, local enterprises, and huge
//           corporate entities ever since I began my work as a Professional
//           Organizer.
//         </Text>
//         <Text style={styles.listItem}>
//           • From organizing their private offices to the overall conglomerates,
//           I've collaborated with my clients on a variety of initiatives.
//         </Text>
//         <Text style={styles.listItem}>
//           • Additionally, I have engaged with customers on ventures that ranged
//           in complexity from simple to difficult.
//         </Text>
//         <Text style={styles.listItem}>
//           • I've learned how to interact with people of different ages and
//           socioeconomic groups due to my expertise.
//         </Text>
//         <Text style={styles.listItem}>
//           • I had encountered individuals from all stages of life, ranging from
//           those who are newly beginning to those who hold successful jobs.
//         </Text>
//         <Text style={styles.listItem}>
//           • I've dealt with everyone from extroverted social butterflies to
//           quieter, more reticent individuals.
//         </Text>
//         <Text style={styles.listItem}>
//           • I am indeed UCPO Certified Professional Organizer.
//         </Text>
//         <Text style={styles.paragraph}>
//           I'm eager to discuss the Professional Organizer employment at The
//           Systematized Living with you in more detail. I am certain that I'm
//           equipped with the knowledge and expertise to contribute significantly
//           to your business. I've attached my resume for your consideration. I
//           appreciate your thoughts and time.
//         </Text>
//         <Text style={styles.closing}>Sincerely,</Text>
//         <Text style={styles.signature}>[Your Name]</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default CoverLetterTemplate1;

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     margin: 10,
//     elevation: 3,
//   },
//   header: {
//     marginBottom: 5,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   title: {
//     fontSize: 14,
//     color: '#b5651d',
//     marginTop: 2,
//   },
//   contact: {
//     alignItems: 'flex-end',
//     marginBottom: 5,
//   },
//   contactText: {
//     fontSize: 10,
//     color: '#666',
//   },
//   separator: {
//     height: 2,
//     backgroundColor: '#b5651d',
//     marginVertical: 5,
//   },
//   body: {
//     marginTop: 5,
//   },
//   date: {
//     fontSize: 12,
//     marginBottom: 5,
//     color: '#333',
//   },
//   recipient: {
//     fontSize: 12,
//     color: '#333',
//   },
//   greeting: {
//     fontSize: 12,
//     marginTop: 10,
//     marginBottom: 5,
//     color: '#333',
//   },
//   paragraph: {
//     fontSize: 10,
//     marginBottom: 5,
//     color: '#333',
//     lineHeight: 18,
//   },
//   listItem: {
//     fontSize: 10,
//     marginBottom: 5,
//     color: '#333',
//     lineHeight: 18,
//   },
//   closing: {
//     fontSize: 12,
//     marginTop: 10,
//     color: '#333',
//   },
//   signature: {
//     fontSize: 12,
//     marginTop: 5,
//     color: '#333',
//   },
// });
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const CoverLetterTemplate1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>ROBERT SMITH</Text>
        <Text style={styles.title}>Professional Organizer</Text>
      </View>

      {/* Contact Section */}
      <View style={styles.contact}>
        <Text style={styles.contactText}>Phone: (123) 456-7899</Text>
        <Text style={styles.contactText}>Email: info@qwikresume.com</Text>
        <Text style={styles.contactText}>Website: www.qwikresume.com</Text>
        <Text style={styles.contactText}>
          LinkedIn: linkedin.com/qwikresume
        </Text>
        <Text style={styles.contactText}>
          Address: 1737 Marshville Road, Alabama
        </Text>
      </View>

      <View style={styles.separator} />

      {/* Body Section */}
      <View style={styles.body}>
        <Text style={styles.date}>[Today's Date]</Text>
        <Text style={styles.recipient}>[341 Company Address]</Text>
        <Text style={styles.recipient}>[Company City, State xxxxx]</Text>
        <Text style={styles.recipient}>[(xxx) xxx-xxxx]</Text>
        <Text style={styles.recipient}>[hiring.manager@gmail.com]</Text>

        <Text style={styles.greeting}>
          Dear [Mr./Mrs./Ms.] [Hiring Manager's Name],
        </Text>

        <Text style={styles.paragraph}>
          I'm writing to submit an application for the opening of a Professional
          Organizer role that was just posted on the organization's website. I
          have more than five years of experience as a Professional Organizer
          and a wealth of knowledge about assisting individuals in decluttering
          their spaces and lives. I'm passionate about helping people lead more
          organized and efficient lives, and I believe my skills and expertise
          would be a great asset to your organization.
        </Text>

        <Text style={styles.paragraph}>
          Over the years, I've successfully assisted a diverse clientele – from
          private individuals to large corporations – in achieving their
          organizational goals. My ability to understand each client's unique
          needs, combined with an acute attention to detail, has allowed me to
          craft tailored solutions that deliver results. I also bring a solid
          background in marketing and business administration, along with
          extensive experience using Microsoft Office and other software tools.
        </Text>

        <Text style={styles.paragraph}>
          Some of my professional highlights include:
        </Text>
        <Text style={styles.listItem}>
          • Served individuals, local enterprises, and corporate entities.
        </Text>
        <Text style={styles.listItem}>
          • Organized private offices and entire corporate conglomerates.
        </Text>
        <Text style={styles.listItem}>
          • Delivered projects ranging from simple home setups to complex office
          overhauls.
        </Text>
        <Text style={styles.listItem}>
          • Worked with clients of diverse ages and backgrounds.
        </Text>
        <Text style={styles.listItem}>
          • Assisted both extroverted social butterflies and more reserved
          individuals.
        </Text>
        <Text style={styles.listItem}>
          • Proudly hold the UCPO Certified Professional Organizer credential.
        </Text>

        <Text style={styles.paragraph}>
          I am eager to discuss the Professional Organizer role at The
          Systematized Living in more detail. I am confident that my background,
          skills, and passion for organization will allow me to make a
          significant contribution to your team. I've attached my resume for
          your review and look forward to the opportunity to speak with you.
        </Text>

        <Text style={styles.closing}>Sincerely,</Text>
        <Text style={styles.signature}>[Your Name]</Text>
      </View>
    </ScrollView>
  );
};

export default CoverLetterTemplate1;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 15,
    elevation: 4, // subtle shadow for Android
    shadowColor: '#000', // shadow settings for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    marginBottom: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 16,
    color: '#b5651d',
    marginTop: 4,
  },
  contact: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 12,
    color: '#666',
    marginVertical: 1,
  },
  separator: {
    height: 2,
    backgroundColor: '#b5651d',
    marginVertical: 10,
    borderRadius: 1,
  },
  body: {
    marginTop: 10,
  },
  date: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333',
  },
  recipient: {
    fontSize: 12,
    color: '#333',
    marginBottom: 2,
  },
  greeting: {
    fontSize: 12,
    marginTop: 12,
    marginBottom: 8,
    color: '#333',
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 8,
    color: '#444',
    lineHeight: 18,
  },
  listItem: {
    fontSize: 12,
    marginBottom: 6,
    color: '#444',
    lineHeight: 18,
    marginLeft: 10,
  },
  closing: {
    fontSize: 12,
    marginTop: 12,
    color: '#333',
  },
  signature: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
    fontWeight: 'bold',
  },
});
