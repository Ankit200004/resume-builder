// import React, {useContext, useEffect, useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image as RNImage,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {AppwriteContext} from '../appwrite/AppwriteContext';
// import {Alert} from 'react-native';

// type UserObject = {
//   name: string;
//   email: string;
//   avatarUrl: string | null;
// };

// const Home = () => {
//   const [userData, setUserData] = useState<UserObject | null>(null);
//   const [showProfileMenu, setShowProfileMenu] = useState(false); // Toggle for profile menu visibility
//   const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);

//   const handleLogout = () => {
//     appwrite.logout().then(() => {
//       setIsLoggedIn(false);
//       Alert.alert('Logout Successful');
//     });
//   };

//   const toggleProfileMenu = () => {
//     setShowProfileMenu(!showProfileMenu); // Toggle the profile menu
//   };

//   useEffect(() => {
//     appwrite
//       .getCurrentUser()
//       .then(response => {
//         if (response) {
//           const user: UserObject = {
//             name: response.name,
//             email: response.email,
//             avatarUrl: null, // If there's no avatar field, set it to null
//           };
//           setUserData(user);
//         } else {
//           Alert.alert('No user data found!');
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         Alert.alert('Error fetching user data!');
//       });
//   }, [appwrite]);

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header or Navbar */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Home Page</Text>
//         <TouchableOpacity onPress={toggleProfileMenu}>
//           <RNImage
//             source={{
//               uri:
//                 userData?.avatarUrl ||
//                 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png', // Fallback image if avatarUrl is null
//             }}
//             style={styles.profileIcon}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Menu */}
//       {showProfileMenu && (
//         <View style={styles.profileMenu}>
//           {userData ? (
//             <View style={styles.userInfo}>
//               <Text style={styles.userName}>{userData.name}</Text>
//               <Text style={styles.userEmail}>{userData.email}</Text>
//             </View>
//           ) : (
//             <Text style={styles.loading}>Loading...</Text>
//           )}
//           <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//             <Text style={styles.logoutText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Main Content */}
//       <View style={styles.mainContent}>
//         <Text style={styles.welcomeText}>Welcome to Your App!</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#808080', // Grey color for the header
//     padding: 15,
//     elevation: 5, // Add shadow to the header
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   profileIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   profileMenu: {
//     position: 'absolute',
//     top: 60,
//     right: 15,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 4},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     width: 180,
//     zIndex: 1,
//   },
//   userInfo: {
//     marginBottom: 15,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#777',
//   },
//   logoutButton: {
//     backgroundColor: '#f02e65',
//     paddingVertical: 8,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   logoutText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   loading: {
//     fontSize: 16,
//     color: '#999',
//     textAlign: 'center',
//   },
//   mainContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcomeText: {
//     fontSize: 22,
//     fontWeight: '500',
//     color: '#333',
//   },
// });

// export default Home;

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image as RNImage,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../routes/AppStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeNavigationProp = NativeStackNavigationProp<AppStackParamList, 'Main'>;

const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  const goToChats = () => {
    navigation.navigate('Chats');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home Page</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.welcomeText}>Welcome to Your App!</Text>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={goToChats}>
        <RNImage
          source={{
            // uri: 'https://cdn-icons-png.flaticon.com/512/561/561127.png',
            uri: 'https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg',
          }}
          style={styles.chatIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#808080',
    padding: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ADD8E6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  chatIcon: {
    width: 30,
    height: 30,
  },
});

export default Home;
