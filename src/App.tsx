import Router from './routes/Router';
import * as AppwriteModule from './appwrite/AppwriteContext';
console.log('AppwriteModule:', AppwriteModule);
import {AppwriteProvider} from './appwrite/AppwriteContext';

const App = () => {
  console.log('AppwriteProvider:', AppwriteProvider);
  return (
    <AppwriteProvider>
      <Router />
      //test@11111
    </AppwriteProvider>
  );
};

export default App;
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import {Card} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const App = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiry, setExpiry] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [name, setName] = useState('');

//   const handlePayment = () => {
//     if (!cardNumber || !expiry || !cvv || !name) {
//       Alert.alert('Error', 'Please fill in all details');
//       return;
//     }
//     Alert.alert('Success', 'Payment processed successfully!');
//   };

//   return (
//     <View style={styles.container}>
//       <Card style={styles.card}>
//         <Text style={styles.title}>Payment Details</Text>

//         {/* Card Number */}
//         <View style={styles.inputContainer}>
//           <Icon name="credit-card" size={20} color="black" />
//           <TextInput
//             style={styles.input}
//             placeholder="Card Number"
//             keyboardType="numeric"
//             value={cardNumber}
//             onChangeText={setCardNumber}
//             maxLength={16}
//           />
//         </View>

//         {/* Expiry & CVV */}
//         <View style={styles.row}>
//           <View style={[styles.inputContainer, styles.halfWidth]}>
//             <TextInput
//               style={styles.input}
//               placeholder="MM/YY"
//               keyboardType="numeric"
//               value={expiry}
//               onChangeText={setExpiry}
//               maxLength={5}
//             />
//           </View>

//           <View style={[styles.inputContainer, styles.halfWidth]}>
//             <TextInput
//               style={styles.input}
//               placeholder="CVV"
//               keyboardType="numeric"
//               value={cvv}
//               onChangeText={setCvv}
//               maxLength={3}
//               secureTextEntry
//             />
//           </View>
//         </View>

//         {/* Cardholder Name */}
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Cardholder Name"
//             value={name}
//             onChangeText={setName}
//           />
//         </View>

//         {/* Pay Now Button */}
//         <TouchableOpacity style={styles.button} onPress={handlePayment}>
//           <Text style={styles.buttonText}>Pay Now</Text>
//         </TouchableOpacity>
//       </Card>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//     padding: 20,
//   },
//   card: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 15,
//     color: '#333',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginBottom: 12,
//     backgroundColor: '#F9F9F9',
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   halfWidth: {
//     width: '48%',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default App;
