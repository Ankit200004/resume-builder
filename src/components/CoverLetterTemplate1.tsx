import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CoverLetterTemplate = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Top-left Name & Title */}
        <View style={styles.header}>
          <Text style={styles.name}>JACKIE ELISE</Text>
          <Text style={styles.title}>Nurse</Text>
        </View>

        {/* Recipient & Sender Details */}
        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoBlockHeading}>To</Text>
            <Text style={styles.infoBlockText}>Dr. Rowntree</Text>
            <Text style={styles.infoBlockText}>Mount Bisai</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoBlockHeading}>From</Text>
            <Text style={styles.infoBlockText}>Jackie Elise</Text>
            <Text style={styles.infoBlockText}>Nurse</Text>
            <Text style={styles.infoBlockText}>
              8888 Jack Lane, Dallas, TX 75051
            </Text>
            <Text style={styles.infoBlockText}>432-42-6698</Text>
            <Text style={styles.infoBlockText}>jck_lelise19@gmail.com</Text>
          </View>
        </View>

        {/* Body of Letter */}
        <View style={styles.letterBody}>
          <Text style={styles.paragraph}>Dear Dr. Rowntree,</Text>
          <Text style={styles.paragraph}>
            I write to express an interest in your accelerated nurse midwifery
            programme for recently-qualified CNMs. During my studies, I have
            always sought to learn from the best, and I believe there is no
            better place than Mount Bisai.
          </Text>
          <Text style={styles.paragraph}>
            After graduating with a BSN from NYU Rory Meyers College of Nursing,
            I worked as a licensed RN for four years before deciding to pursue
            my Masters in Nurse Midwifery. I passed my CNM two years ago, and as
            an experienced Certified Nurse Midwife, I am aware that the learning
            process truly comes alive in the delivery room.
          </Text>
          <Text style={styles.paragraph}>
            My range of experience—from prenatal to delivery and postpartum
            care—ensures that I can address the concerns of families regarding
            patients’ needs. I have worked with more than 350 births and am
            eager to learn more about everyday practice at Mount Bisai. I
            believe that my empathetic interpersonal skills have been vital in
            offering the best experience to each mother and child.
          </Text>
          <Text style={styles.paragraph}>
            I look forward to the possibility of attending rounds, particularly
            those focusing on postpartum depression and infant nutrition, as
            well as general wellness. Every day is a learning opportunity.
          </Text>
          <Text style={styles.paragraph}>
            I have 10 letters of recommendation from new parents—many of whom
            focus on how postpartum care can truly set families on a path to
            health and success. I hope I can bring my dedication and skillset to
            your program at Mount Bisai.
          </Text>
          <Text style={styles.paragraph}>
            Thank you for your time and consideration. I would be honored to
            further discuss how I can make a positive contribution to your team.
          </Text>
          <Text style={styles.paragraph}>Sincerely,</Text>
          <Text style={styles.signature}>Jackie Elise</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CoverLetterTemplate;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  container: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  header: {
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBlock: {
    flex: 1,
  },
  infoBlockHeading: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
    color: '#444',
    textTransform: 'uppercase',
  },
  infoBlockText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
  },
  letterBody: {
    marginTop: 10,
  },
  paragraph: {
    fontSize: 13,
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'justify',
  },
  signature: {
    fontSize: 13,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
