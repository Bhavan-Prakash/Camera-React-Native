/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */









//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
//import { initializeApp } from '@firebase/app';
//import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import { WebView } from 'react-native-webview';
////camera added by me
//import { PermissionsAndroid, Platform } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//
//
////just added
//
//const CameraScreen = () => {
//   const [hasPermission, setHasPermission] = useState(false);
//   const devices = useCameraDevices();
//   const frontDevice = devices.find(device => device.position === 'front'); // Accessing front camera
//
//   useEffect(() => {
//     const requestCameraPermission = async () => {
//       if (Platform.OS === 'android') {
//         try {
//           const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
//           const result = await PermissionsAndroid.check(permission);
//           if (result === PermissionsAndroid.RESULTS.GRANTED) {
//             setHasPermission(true);
//           } else {
//             const requestResult = await PermissionsAndroid.request(permission);
//             if (requestResult === PermissionsAndroid.RESULTS.GRANTED) {
//               setHasPermission(true);
//             } else {
//               setHasPermission(false);
//             }
//           }
//         } catch (err) {
//           console.warn(err);
//           setHasPermission(false);
//         }
//       } else if (Platform.OS === 'ios') {
//         setHasPermission(true); // Assuming permission is handled via Info.plist
//       }
//     };
//
//     requestCameraPermission();
//   }, []);
//
//   // Ensure the device is available before rendering the Camera component
//   if (!hasPermission || frontDevice == null) {
//     return <View style={styles.container}><Text>Loading camera...</Text></View>;
//   }
//
//   return (
//     <View style={styles.container}>
//       <Camera
//         style={StyleSheet.absoluteFill} // Adjust styling as needed
//         device={frontDevice}
//         isActive={true}
//       />
//     </View>
//   );
// };
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//async function requestCameraPermission() {
//  try {
//    const granted = await PermissionsAndroid.request(
//      PermissionsAndroid.PERMISSIONS.CAMERA,
//      {
//        title: 'Camera Permission',
//        message: 'App needs access to your camera',
//        buttonNeutral: 'Ask Me Later',
//        buttonNegative: 'Cancel',
//        buttonPositive: 'OK',
//      }
//    );
//    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//      console.log('Camera permission granted');
//    } else {
//      console.log('Camera permission denied');
//    }
//  } catch (err) {
//    console.warn(err);
//  }
//}
//
//
//
//// Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
//  authDomain: "recognition-1bf05.firebaseapp.com",
//  projectId: "recognition-1bf05",
//  storageBucket: "recognition-1bf05.appspot.com",
//  messagingSenderId: "428104914028",
//  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
//  measurementId: "G-BMFXKWXBM3"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Configure Google Sign-In
//GoogleSignin.configure({
//  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
//});
//
//// AuthScreen Component
//
//const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, handleGoogleSignIn }) => {
//  return (
//    <View style={styles.authContainer}>
//      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
//      <TextInput
//        style={styles.input}
//         placeholderTextColor="black"
//        value={email}
//        onChangeText={setEmail}
//        placeholder="Email"
//        autoCapitalize="none"
//      />
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={password}
//        onChangeText={setPassword}
//        placeholder="Password"
//        secureTextEntry
//      />
//      <View style={styles.buttonContainer}>
//        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
//      </View>
//      <View style={styles.buttonContainer}>
//        <Button title="Sign In with Google" onPress={handleGoogleSignIn} color="#db4437" />
//      </View>
//      <View style={styles.bottomContainer}>
//        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
//          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
//        </Text>
//      </View>
//    </View>
//  );
//};
//
//// AuthenticatedScreen Component
////just added
//const AuthenticatedScreen = () => {
//   requestCameraPermission()
//   const [showCamera, setShowCamera] = useState(false);
//
//   const handleNavigationChange = (navState) => {
//     const { url } = navState;
//     if (url.includes('https://attendance.mietjmu.in/manual_attendance/index.php')) {
//     console.log('hiiiiii!');
//       setShowCamera(true);
//     } else {
//       setShowCamera(false);
//     }
//   };
//
//
//   return (
//     <SafeAreaView style={styles.container}>
//       <WebView
//         source={{ uri: 'https://attendance.mietjmu.in' }} // Adjust the URL if needed
//         style={styles.webview}
//         onNavigationStateChange={handleNavigationChange}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         startInLoadingState={true}
//       />
//       {showCamera}
//       {showCamera && <CameraScreen />}
//
//     </SafeAreaView>
//   );
// };
//
//
//
//
//
//
//
//
//
//
//
//
////const AuthenticatedScreen = () => {
////requestCameraPermission()
////  return (
////    <SafeAreaView style={styles.container}>
////      <WebView
////       // http://10.253.4.96/attendance/
////        source={{ uri: 'https://attendance.mietjmu.in' }}
////        style={styles.webview}
////        onError={(error) => console.error('WebView error:', error)}
////        onLoad={() => console.log('WebView loaded successfully')}
////        javaScriptEnabled={true}
////        domStorageEnabled={true}
////        startInLoadingState={true}
////      />
////    </SafeAreaView>
////  );
////};
//
//// Main App Component
//const App = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [isLogin, setIsLogin] = useState(true);
//
//  const auth = getAuth(app);
//
//  useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//      setUser(user);
//  });
//
//    return () => unsubscribe();
//  }, [auth]);
//
//  const handleAuthentication = async () => {
//    try {
//      if (isLogin) {
//        // Sign in
//        await signInWithEmailAndPassword(auth, email, password);
//        console.log('User signed in successfully!');
//      } else {
//        // Sign up
//        await createUserWithEmailAndPassword(auth, email, password);
//        console.log('User created successfully!');
//      }
//    } catch (error) {
//      console.error('Authentication error:', error.message);
//    }
//  };
//
//  const handleGoogleSignIn = async () => {
//    try {
//      await GoogleSignin.hasPlayServices();
//      const { idToken } = await GoogleSignin.signIn();
//      const googleCredential = GoogleAuthProvider.credential(idToken);
//      await signInWithCredential(auth, googleCredential);
//      console.log('User signed in with Google!');
//    } catch (error) {
//      console.error('Google Sign-In error:', error.message);
//    }
//  };
//
//
//  return (
//    <ScrollView contentContainerStyle={styles.container}>
//      {user ? (
//        <AuthenticatedScreen />
//      ) : (
//        <AuthScreen
//          email={email}
//          setEmail={setEmail}
//          password={password}
//          setPassword={setPassword}
//          isLogin={isLogin}
//          setIsLogin={setIsLogin}
//          handleAuthentication={handleAuthentication}
//          handleGoogleSignIn={handleGoogleSignIn}
//        />
//      )}
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//  authContainer: {
//    width: '100%',
//    maxWidth: 400,
//    backgroundColor: '#fff',
//    padding: 16,
//    borderRadius: 8,
//    elevation: 3,
//    marginTop: '50%',
//  },
//  title: {
//    fontSize: 24,
//    marginBottom: 16,
//    textAlign: 'center',
//  },
//  input: {
//  color: 'black',
//    height: 40,
//    borderColor: '#ddd',
//    borderWidth: 1,
//    marginBottom: 16,
//    padding: 8,
//    borderRadius: 4,
//  },
//  buttonContainer: {
//    marginBottom: 16,
//  },
//  toggleText: {
//    color: '#3498db',
//    textAlign: 'center',
//  },
//  bottomContainer: {
//    marginTop: 20,
//  },
//  webview: {
//    flex: 1,
//  },
//});
//
//export default App;






















//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
//import { initializeApp } from '@firebase/app';
//import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import { WebView } from 'react-native-webview';
////camera added by me
//import { PermissionsAndroid, Platform } from 'react-native';
//
//async function requestCameraPermission() {
//  try {
//    const granted = await PermissionsAndroid.request(
//      PermissionsAndroid.PERMISSIONS.CAMERA,
//      {
//        title: 'Camera Permission',
//        message: 'App needs access to your camera',
//        buttonNeutral: 'Ask Me Later',
//        buttonNegative: 'Cancel',
//        buttonPositive: 'OK',
//      }
//    );
//    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//      console.log('Camera permission granted');
//    } else {
//      console.log('Camera permission denied');
//    }
//  } catch (err) {
//    console.warn(err);
//  }
//}
//
//
//
//// Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
//  authDomain: "recognition-1bf05.firebaseapp.com",
//  projectId: "recognition-1bf05",
//  storageBucket: "recognition-1bf05.appspot.com",
//  messagingSenderId: "428104914028",
//  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
//  measurementId: "G-BMFXKWXBM3"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Configure Google Sign-In
//GoogleSignin.configure({
//  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
//});
//
//// AuthScreen Component
//const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, handleGoogleSignIn }) => {
//  return (
//    <View style={styles.authContainer}>
//      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
//      <TextInput
//        style={styles.input}
//         placeholderTextColor="black"
//        value={email}
//        onChangeText={setEmail}
//        placeholder="Email"
//        autoCapitalize="none"
//      />
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={password}
//        onChangeText={setPassword}
//        placeholder="Password"
//        secureTextEntry
//      />
//      <View style={styles.buttonContainer}>
//        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
//      </View>
//      <View style={styles.buttonContainer}>
//        <Button title="Sign In with Google" onPress={handleGoogleSignIn} color="#db4437" />
//      </View>
//      <View style={styles.bottomContainer}>
//        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
//          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
//        </Text>
//      </View>
//    </View>
//  );
//};
//
//// AuthenticatedScreen Component
//
//const AuthenticatedScreen = () => {
//requestCameraPermission()
//  return (
//    <SafeAreaView style={styles.container}>
//      <WebView
//       // http://10.253.4.96/attendance/
//        source={{ uri: 'https://attendance.mietjmu.in' }}
//        style={styles.webview}
//        onError={(error) => console.error('WebView error:', error)}
//        onLoad={() => console.log('WebView loaded successfully')}
//        javaScriptEnabled={true}
//        domStorageEnabled={true}
//        startInLoadingState={true}
//      />
//    </SafeAreaView>
//  );
//};
//
//// Main App Component
//const App = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [isLogin, setIsLogin] = useState(true);
//
//  const auth = getAuth(app);
//
//  useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (user) => {
//      setUser(user);
//    });
//    return () => unsubscribe();
//  }, [auth]);
//
//  const handleAuthentication = async () => {
//    try {
//      if (isLogin) {
//        // Sign in
//        await signInWithEmailAndPassword(auth, email, password);
//        console.log('User signed in successfully!');
//      } else {
//        // Sign up
//        await createUserWithEmailAndPassword(auth, email, password);
//        console.log('User created successfully!');
//      }
//    } catch (error) {
//      console.error('Authentication error:', error.message);
//    }
//  };
//
//  const handleGoogleSignIn = async () => {
//    try {
//      await GoogleSignin.hasPlayServices();
//      const { idToken } = await GoogleSignin.signIn();
//      const googleCredential = GoogleAuthProvider.credential(idToken);
//      await signInWithCredential(auth, googleCredential);
//      console.log('User signed in with Google!');
//    } catch (error) {
//      console.error('Google Sign-In error:', error.message);
//    }
//  };
//
//
//  return (
//    <ScrollView contentContainerStyle={styles.container}>
//      {user ? (
//        <AuthenticatedScreen />
//      ) : (
//        <AuthScreen
//          email={email}
//          setEmail={setEmail}
//          password={password}
//          setPassword={setPassword}
//          isLogin={isLogin}
//          setIsLogin={setIsLogin}
//          handleAuthentication={handleAuthentication}
//          handleGoogleSignIn={handleGoogleSignIn}
//        />
//      )}
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//  authContainer: {
//    width: '100%',
//    maxWidth: 400,
//    backgroundColor: '#fff',
//    padding: 16,
//    borderRadius: 8,
//    elevation: 3,
//    marginTop: '50%',
//  },
//  title: {
//    fontSize: 24,
//    marginBottom: 16,
//    textAlign: 'center',
//  },
//  input: {
//  color: 'black',
//    height: 40,
//    borderColor: '#ddd',
//    borderWidth: 1,
//    marginBottom: 16,
//    padding: 8,
//    borderRadius: 4,
//  },
//  buttonContainer: {
//    marginBottom: 16,
//  },
//  toggleText: {
//    color: '#3498db',
//    textAlign: 'center',
//  },
//  bottomContainer: {
//    marginTop: 20,
//  },
//  webview: {
//    flex: 1,
//  },
//});
//
//export default App;
//







//
//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView,PermissionsAndroid, Platform } from 'react-native';
//import { initializeApp } from '@firebase/app';
//import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
////import { PermissionsAndroid, Platform } from 'react-native';
//import axios from 'axios';
//import DataTable from 'react-native-data-table';
//
//
//const AttendanceTable = () => {
//    const [loading, setLoading] = useState(true);
//    const [data, setData] = useState([]);
//
//    useEffect(() => {
//        axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//            .then(response => {
//                setData(response.data.data);
//                setLoading(false);
//            })
//            .catch(error => {
//                console.error('Error fetching data:', error);
//                setLoading(false);
//            });
//    }, []);
//
//    if (loading) {
//        return <ActivityIndicator size="large" color="#0000ff" />;
//    }
//
//    return (
//        <View>
//            <DataTable
//                data={data}
//                columns={[
//                    { name: 'Record ID', selector: 'Record_ID' },
//                    { name: 'Name', selector: 'name' },
//                    { name: 'Email', selector: 'email' },
//                    { name: 'Department', selector: 'department' },
//                    { name: 'Date', selector: 'date' },
//                    { name: 'Time', selector: 'time' },
//                    { name: 'Type', selector: 'type' }
//                ]}
//            />
//        </View>
//    );
//};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//// Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
//  authDomain: "recognition-1bf05.firebaseapp.com",
//  projectId: "recognition-1bf05",
//  storageBucket: "recognition-1bf05.appspot.com",
//  messagingSenderId: "428104914028",
//  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
//  measurementId: "G-BMFXKWXBM3"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Configure Google Sign-In
//GoogleSignin.configure({
//  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
//});
//
//const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, handleGoogleSignIn }) => {
//  return (
//    <View style={styles.authContainer}>
//      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={email}
//        onChangeText={setEmail}
//        placeholder="Email"
//        autoCapitalize="none"
//      />
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={password}
//        onChangeText={setPassword}
//        placeholder="Password"
//        secureTextEntry
//      />
//      <View style={styles.buttonContainer}>
//        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
//      </View>
//      <View style={styles.buttonContainer}>
//        <Button title="Sign In with Google" onPress={handleGoogleSignIn} color="#db4437" />
//      </View>
//      <View style={styles.bottomContainer}>
//        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
//          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
//        </Text>
//      </View>
//    </View>
//  );
//};
//
//const App = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [isLogin, setIsLogin] = useState(true);
//
//  const auth = getAuth(app);
//
//  useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (user) => {
//      setUser(user);
//    });
//    return () => unsubscribe();
//  }, [auth]);
//
//  const handleAuthentication = async () => {
//    try {
//      if (isLogin) {
//        // Sign in
//        await signInWithEmailAndPassword(auth, email, password);
//        console.log('User signed in successfully!');
//        <AttendanceTable/>;
//      } else {
//        // Sign up
//        await createUserWithEmailAndPassword(auth, email, password);
//        console.log('User created successfully!');
//      }
//    } catch (error) {
//      console.error('Authentication error:', error.message);
//    }
//  };
//
//  const handleGoogleSignIn = async () => {
//    try {
//      if (Platform.OS === 'android') {
//        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.GET_ACCOUNTS);
//      }
//      await GoogleSignin.hasPlayServices();
//      const { idToken } = await GoogleSignin.signIn();
//      const googleCredential = GoogleAuthProvider.credential(idToken);
//      await signInWithCredential(auth, googleCredential);
//      console.log('User signed in with Google!');
//    } catch (error) {
//      console.error('Google Sign-In error:', error.message);
//    }
//  };
//
//  return (
//    <SafeAreaView style={styles.container}>
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        <AuthScreen
//          email={email}
//          setEmail={setEmail}
//          password={password}
//          setPassword={setPassword}
//          isLogin={isLogin}
//          setIsLogin={setIsLogin}
//          handleAuthentication={handleAuthentication}
//          handleGoogleSignIn={handleGoogleSignIn}
//        />
//      </ScrollView>
//    </SafeAreaView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//  scrollContainer: {
//    flexGrow: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  authContainer: {
//    width: '100%',
//    maxWidth: 400,
//    backgroundColor: '#fff',
//    padding: 16,
//    borderRadius: 8,
//    elevation: 3,
//  },
//  title: {
//    fontSize: 24,
//    marginBottom: 16,
//    textAlign: 'center',
//  },
//  input: {
//    color: 'black',
//    height: 40,
//    borderColor: '#ddd',
//    borderWidth: 1,
//    marginBottom: 16,
//    padding: 8,
//    borderRadius: 4,
//  },
//  buttonContainer: {
//    marginBottom: 16,
//  },
//  toggleText: {
//    color: '#3498db',
//    textAlign: 'center',
//  },
//  bottomContainer: {
//    marginTop: 20,
//  },
//});
//
//export default App;
//







//working table code
//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native';
//import { initializeApp } from '@firebase/app';
//import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import axios from 'axios';
//import { DataTable } from 'react-native-paper';
////import { Camera, useCameraDevices } from 'react-native-vision-camera';
//
//
//
//const AttendanceTable = ({ onMarkAttendance }) => {
//  const [loading, setLoading] = useState(true);
//  const [data, setData] = useState([]);
//
//  useEffect(() => {
//    axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//      .then(response => {
//        console.log('API Response:', response.data);
//        setData(response.data.data || []);
//        setLoading(false);
//      })
//      .catch(error => {
//        console.error('Error fetching data:', error);
//        setLoading(false);
//      });
//  }, []);
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//  }
//
//  return (
//    <ScrollView style={styles.scrollView}>
//      <View style={styles.tableContainer}>
//        <View style={styles.button}>
//          <Button title="Mark Attendance" color="black" />
//        </View>
//        <DataTable>
//          <DataTable.Header>
//            <DataTable.Title>Record ID</DataTable.Title>
//            <DataTable.Title>Name</DataTable.Title>
//            <DataTable.Title>Date</DataTable.Title>
//            <DataTable.Title>Type</DataTable.Title>
//          </DataTable.Header>
//          {data.map((item, index) => (
//            <DataTable.Row key={index}>
//              <DataTable.Cell>{item.Record_ID}</DataTable.Cell>
//              <DataTable.Cell>{item.name}</DataTable.Cell>
//              <DataTable.Cell>{item.date}</DataTable.Cell>
//              <DataTable.Cell>{item.type}</DataTable.Cell>
//            </DataTable.Row>
//          ))}
//        </DataTable>
//      </View>
//    </ScrollView>
//  );
//};
//
//const firebaseConfig = {
//  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
//  authDomain: "recognition-1bf05.firebaseapp.com",
//  projectId: "recognition-1bf05",
//  storageBucket: "recognition-1bf05.appspot.com",
//  messagingSenderId: "428104914028",
//  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
//  measurementId: "G-BMFXKWXBM3"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Configure Google Sign-In
//GoogleSignin.configure({
//  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
//});
//
//const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, handleGoogleSignIn }) => {
//  return (
//    <View style={styles.authContainer}>
//      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={email}
//        onChangeText={setEmail}
//        placeholder="Email"
//        autoCapitalize="none"
//      />
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={password}
//        onChangeText={setPassword}
//        placeholder="Password"
//        secureTextEntry
//      />
//      <View style={styles.buttonContainer}>
//        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
//      </View>
//      <View style={styles.buttonContainer}>
//        <Button title="Sign In with Google" onPress={handleGoogleSignIn} color="#db4437" />
//      </View>
//      <View style={styles.bottomContainer}>
//        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
//          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
//        </Text>
//      </View>
//    </View>
//  );
//};
//
//const App = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [isLogin, setIsLogin] = useState(true);
//
//  const auth = getAuth(app);
//
//  useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (user) => {
//      setUser(user);
//    });
//    return () => unsubscribe();
//  }, [auth]);
//
//  const handleAuthentication = async () => {
//    try {
//      if (isLogin) {
//        // Sign in
//        await signInWithEmailAndPassword(auth, email, password);
//        console.log('User signed in successfully!');
//      } else {
//        // Sign up
//        await createUserWithEmailAndPassword(auth, email, password);
//        console.log('User created successfully!');
//      }
//    } catch (error) {
//      console.error('Authentication error:', error.message);
//    }
//  };
//
//  const handleGoogleSignIn = async () => {
//    try {
//      if (Platform.OS === 'android') {
//        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.GET_ACCOUNTS);
//      }
//      await GoogleSignin.hasPlayServices();
//      const { idToken } = await GoogleSignin.signIn();
//      const googleCredential = GoogleAuthProvider.credential(idToken);
//      await signInWithCredential(auth, googleCredential);
//      console.log('User signed in with Google!');
//    } catch (error) {
//      console.error('Google Sign-In error:', error.message);
//    }
//  };
//
//
//
//  return (
//    <SafeAreaView style={styles.container}>
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        <Text style={styles.title}>Attendance Records</Text>
//        { user ? (
//          <AttendanceTable />
//        ) : (
//          <AuthScreen
//            email={email}
//            setEmail={setEmail}
//            password={password}
//            setPassword={setPassword}
//            isLogin={isLogin}
//            setIsLogin={setIsLogin}
//            handleAuthentication={handleAuthentication}
//            handleGoogleSignIn={handleGoogleSignIn}
//          />
//        )}
//      </ScrollView>
//    </SafeAreaView>
//  );
//};
//
//const styles = StyleSheet.create({
//
//    button: {
////    color: 'black',
////    backgroundColor: 'red',
//    alignItems: 'center',
//    marginBottom: '5%',
//    marginTop: '5%',
//    width: '100%',
//    },
//
//
//
//     container: {
//        flex: 1,
//        backgroundColor: '#fff',
////        alignItems: 'center',
////        justifyContent: 'flex-start',
////        padding: 16,
//    },
////    title: {
////        fontSize: 24,
////        fontWeight: 'bold',
////        marginBottom: 20,
////    },
//    scrollView: {
//        flex: 1,
//        width: '100%',
//    },
//    tableContainer: {
//        width: '100%',
////        paddingHorizontal: 16,
//    },
//
//    loader: {
//        flex: 1,
//        justifyContent: 'center',
//    },
//
//
////    container: {
////        flex: 1,
////    },
//    scrollContainer: {
//        flexGrow: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//    },
//    authContainer: {
//        width: '100%',
//        maxWidth: 400,
//        backgroundColor: '#fff',
//        padding: 16,
//        borderRadius: 8,
//        elevation: 3,
//    },
//    title: {
//        fontSize: 24,
//        marginBottom: 16,
//        textAlign: 'center',
//    },
//    input: {
//        color: 'black',
//        height: 40,
//        borderColor: '#ddd',
//        borderWidth: 1,
//        marginBottom: 16,
//        padding: 8,
//        borderRadius: 4,
//    },
//    buttonContainer: {
//        marginBottom: 16,
//    },
//    toggleText: {
//        color: '#3498db',
//        textAlign: 'center',
//    },
//    bottomContainer: {
//        marginTop: 20,
//    },
//});
//
//export default App;
//
//
//
//
//
//






//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native';
//import { initializeApp } from '@firebase/app';
//import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import axios from 'axios';
//import { DataTable } from 'react-native-paper';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//
//const AttendanceTable = ({ onMarkAttendance }) => {
//  const [loading, setLoading] = useState(true);
//  const [data, setData] = useState([]);
//  const [showCamera, setShowCamera] = useState(false);
//
//  useEffect(() => {
//    axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//      .then(response => {
//        console.log('API Response:', response.data);
//        setData(response.data.data || []);
//        setLoading(false);
//      })
//      .catch(error => {
//        console.error('Error fetching data:', error);
//        setLoading(false);
//      });
//  }, []);
//
//  const handleMarkAttendance = () => {
//    setShowCamera(true);
//  };
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//  }
//
//  if (showCamera) {
//    return <CameraScreen />;
//  }
//
//  return (
//    <ScrollView style={styles.scrollView}>
//      <View style={styles.tableContainer}>
//        <View style={styles.button}>
//          <Button title="Mark Attendance" color="black" onPress={handleMarkAttendance} />
//        </View>
//        <DataTable>
//          <DataTable.Header>
//            <DataTable.Title>Record ID</DataTable.Title>
//            <DataTable.Title>Name</DataTable.Title>
//            <DataTable.Title>Date</DataTable.Title>
//            <DataTable.Title>Type</DataTable.Title>
//          </DataTable.Header>
//          {data.map((item, index) => (
//            <DataTable.Row key={index}>
//              <DataTable.Cell>{item.Record_ID}</DataTable.Cell>
//              <DataTable.Cell>{item.name}</DataTable.Cell>
//              <DataTable.Cell>{item.date}</DataTable.Cell>
//              <DataTable.Cell>{item.type}</DataTable.Cell>
//            </DataTable.Row>
//          ))}
//        </DataTable>
//      </View>
//    </ScrollView>
//  );
//};
//
//const CameraScreen = () => {
//    const [hasPermission, setHasPermission] = useState(false);
//    const devices = useCameraDevices();
//    const backDevice = devices.find(device => device.position === 'back'); // Accessing back camera
//    const frontDevice = devices.find(device => device.position === 'front'); // Accessing front camera
//
//
//  useEffect(() => {
//      const requestCameraPermission = async () => {
//        if (Platform.OS === 'android') {
//          try {
//            const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
//            const result = await PermissionsAndroid.check(permission);
//            if (result === PermissionsAndroid.RESULTS.GRANTED) {
//              setHasPermission(true);
//            } else {
//              const requestResult = await PermissionsAndroid.request(permission);
//              if (requestResult === PermissionsAndroid.RESULTS.GRANTED) {
//                setHasPermission(true);
//              } else {
//                setHasPermission(false);
//              }
//            }
//          } catch (err) {
//            console.warn(err);
//            setHasPermission(false);
//          }
//        } else if (Platform.OS === 'ios') {
//          setHasPermission(true); // Assuming permission is handled via Info.plist
//        }
//      };
//
//      requestCameraPermission();
//    }, []);
//
//
//
//    // Ensure the device is available before rendering the Camera component
//    if (frontDevice == null) {
//      return <View style={styles.container}><Text>Loading camera...</Text></View>;
//    }
//
//    return (
//      <View style={styles.container}>
//        <Camera
//          style={StyleSheet.absoluteFill} // Adjust styling as needed
//          device={frontDevice}
//          isActive={true}
//        />
//      </View>
//    );
//  };
//
//
//const firebaseConfig = {
//  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
//  authDomain: "recognition-1bf05.firebaseapp.com",
//  projectId: "recognition-1bf05",
//  storageBucket: "recognition-1bf05.appspot.com",
//  messagingSenderId: "428104914028",
//  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
//  measurementId: "G-BMFXKWXBM3"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Configure Google Sign-In
//GoogleSignin.configure({
//  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
//});
//
//const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, handleGoogleSignIn }) => {
//  return (
//    <View style={styles.authContainer}>
//      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={email}
//        onChangeText={setEmail}
//        placeholder="Email"
//        autoCapitalize="none"
//      />
//      <TextInput
//        style={styles.input}
//        placeholderTextColor="black"
//        value={password}
//        onChangeText={setPassword}
//        placeholder="Password"
//        secureTextEntry
//      />
//      <View style={styles.buttonContainer}>
//        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
//      </View>
//      <View style={styles.buttonContainer}>
//        <Button title="Sign In with Google" onPress={handleGoogleSignIn} color="#db4437" />
//      </View>
//      <View style={styles.bottomContainer}>
//        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
//          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
//        </Text>
//      </View>
//    </View>
//  );
//};
//
//const App = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [isLogin, setIsLogin] = useState(true);
//
//  const auth = getAuth(app);
//
//  useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (user) => {
//      setUser(user);
//    });
//    return () => unsubscribe();
//  }, [auth]);
//
//  const handleAuthentication = async () => {
//    try {
//      if (isLogin) {
//        // Sign in
//        await signInWithEmailAndPassword(auth, email, password);
//        console.log('User signed in successfully!');
//      } else {
//        // Sign up
//        await createUserWithEmailAndPassword(auth, email, password);
//        console.log('User created successfully!');
//      }
//    } catch (error) {
//      console.error('Authentication error:', error.message);
//    }
//  };
//
//  const handleGoogleSignIn = async () => {
//    try {
//      if (Platform.OS === 'android') {
//        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.GET_ACCOUNTS);
//      }
//      await GoogleSignin.hasPlayServices();
//      const { idToken } = await GoogleSignin.signIn();
//      const googleCredential = GoogleAuthProvider.credential(idToken);
//      await signInWithCredential(auth, googleCredential);
//      console.log('User signed in with Google!');
//    } catch (error) {
//      console.error('Google Sign-In error:', error.message);
//    }
//  };
//
//  return (
//    <SafeAreaView style={styles.container}>
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        <Text style={styles.title}>Attendance Records</Text>
//        { user ? (
//          <AttendanceTable />
//        ) : (
//          <AuthScreen
//            email={email}
//            setEmail={setEmail}
//            password={password}
//            setPassword={setPassword}
//            isLogin={isLogin}
//            setIsLogin={setIsLogin}
//            handleAuthentication={handleAuthentication}
//            handleGoogleSignIn={handleGoogleSignIn}
//          />
//        )}
//      </ScrollView>
//    </SafeAreaView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  scrollContainer: {
//    flexGrow: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  title: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 20,
//  },
//  authContainer: {
//    width: '80%',
//    alignItems: 'center',
//  },
//  input: {
//    height: 40,
//    borderColor: 'gray',
//    borderBottomWidth: 1,
//    width: '100%',
//    marginBottom: 20,
//  },
//  buttonContainer: {
//    marginBottom: 10,
//  },
//  bottomContainer: {
//    marginTop: 20,
//  },
//  toggleText: {
//    color: '#3498db',
//  },
//  tableContainer: {
//    width: '100%',
//    padding: 20,
//  },
//  button: {
//    marginBottom: 20,
//  },
//  loader: {
//    marginTop: 50,
//  },
//  scrollView: {
//    flex: 1,
//    width: '100%',
//  },
//});
//
//export default App;






































































//import React, { useEffect, useState } from 'react';
//import { View, Text, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
//import axios from 'axios';
////import DataTable from 'react-native-data-table';
//import { DataTable } from 'react-native-paper';
//
//const AttendanceTable = () => {
//    const [loading, setLoading] = useState(true);
//    const [data, setData] = useState([]);
//
//    useEffect(() => {
//        axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//            .then(response => {
//            console.log('API Response:', response.data);
//                setData(response.data.data);
//                <Text>setLoading(false)</Text>
//            })
//            .catch(error => {
//                console.error('Error fetching data:', error);
//                setLoading(false);
//            });
//    }, []);
//
//    if (loading) {
//        return <ActivityIndicator size="large" color="#0000ff" />;
//    }
//
//    return (
//        <View style={styles.tableContainer}>
//            <DataTable
//                data={data}
//                columns={[
//                    { name: 'Record ID', selector: 'Record_ID' },
//                    { name: 'Name', selector: 'name' },
//                    { name: 'Email', selector: 'email' },
//                    { name: 'Department', selector: 'department' },
//                    { name: 'Date', selector: 'date' },
//                    { name: 'Time', selector: 'time' },
//                    { name: 'Type', selector: 'type' }
//                ]}
//            />
//        </View>
//    );
//};
//
//const App = () => {
//    return (
//        <SafeAreaView style={styles.container}>
//            <Text style={styles.title}>Attendance Records</Text>
//            <AttendanceTable />
//        </SafeAreaView>
//    );
//};
//
//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        backgroundColor: '#fff',
//        alignItems: 'center',
//        justifyContent: 'center',
//    },
//    title: {
//        fontSize: 24,
//        fontWeight: 'bold',
//        marginBottom: 20,
//    },
//    tableContainer: {
//        flex: 1,
//        width: '100%',
//        padding: 16,
//    },
//});
//
//export default App;






//import React, { useEffect, useState } from 'react';
//import { View, Text, ActivityIndicator, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
//import axios from 'axios';
//import { DataTable } from 'react-native-paper'; // Ensure this package is installed
//
//const AttendanceTable = () => {
//    const [loading, setLoading] = useState(true);
//    const [data, setData] = useState([]);
//
//    useEffect(() => {
//        axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//            .then(response => {
//                console.log('API Response:', response.data);
//                setData(response.data.data || []);
//                setLoading(false);
//            })
//            .catch(error => {
//                console.error('Error fetching data:', error);
//                setLoading(false);
//            });
//    }, []);
//
//    if (loading) {
//        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//    }
//
//    return (
//        <ScrollView style={styles.scrollView}>
//            <View style={styles.tableContainer}>
//                <DataTable>
//                    <DataTable.Header>
//                        <DataTable.Title>Record ID</DataTable.Title>
//                        <DataTable.Title>Name</DataTable.Title>
//                        <DataTable.Title>Email</DataTable.Title>
//                        <DataTable.Title>Department</DataTable.Title>
//                        <DataTable.Title>Date</DataTable.Title>
//                        <DataTable.Title>Time</DataTable.Title>
//                        <DataTable.Title>Type</DataTable.Title>
//                    </DataTable.Header>
//                    {data.map((item, index) => (
//                        <DataTable.Row key={index}>
//                            <DataTable.Cell>{item.Record_ID}</DataTable.Cell>
//                            <DataTable.Cell>{item.name}</DataTable.Cell>
//                            <DataTable.Cell>{item.email}</DataTable.Cell>
//                            <DataTable.Cell>{item.department}</DataTable.Cell>
//                            <DataTable.Cell>{item.date}</DataTable.Cell>
//                            <DataTable.Cell>{item.time}</DataTable.Cell>
//                            <DataTable.Cell>{item.type}</DataTable.Cell>
//                        </DataTable.Row>
//                    ))}
//                </DataTable>
//            </View>
//        </ScrollView>
//    );
//};
//
//const App = () => {
//    return (
//        <SafeAreaView style={styles.container}>
//            <Text style={styles.title}>Attendance Records</Text>
//            <AttendanceTable />
//        </SafeAreaView>
//    );
//};
//
//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        backgroundColor: '#fff',
//        alignItems: 'center',
//        justifyContent: 'flex-start',
////        padding: 16,
//    },
//    title: {
//        fontSize: 24,
//        fontWeight: 'bold',
//        marginBottom: 20,
//    },
//    scrollView: {
//        flex: 1,
//        width: '100%',
//    },
//    tableContainer: {
//        width: '100%',
////        paddingHorizontal: 16,
//    },
//
//    loader: {
//        flex: 1,
//        justifyContent: 'center',
//    },
//});
//
//export default App;
//
//
//
//

































//running camera code

//import {React, useEffect, useState} from 'react';
//import { StyleSheet, View,Text, PermissionsAndroid } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//
//const App = () => {
//
//  const [hasPermission, setHasPermission] = useState(false);
//  const devices = useCameraDevices();
//  const backDevice = devices.find(device => device.position === 'back'); // Accessing back camera
//  const frontDevice = devices.find(device => device.position === 'front'); // Accessing front camera
//
//
//useEffect(() => {
//    const requestCameraPermission = async () => {
//      if (Platform.OS === 'android') {
//        try {
//          const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
//          const result = await PermissionsAndroid.check(permission);
//          if (result === PermissionsAndroid.RESULTS.GRANTED) {
//            setHasPermission(true);
//          } else {
//            const requestResult = await PermissionsAndroid.request(permission);
//            if (requestResult === PermissionsAndroid.RESULTS.GRANTED) {
//              setHasPermission(true);
//            } else {
//              setHasPermission(false);
//            }
//          }
//        } catch (err) {
//          console.warn(err);
//          setHasPermission(false);
//        }
//      } else if (Platform.OS === 'ios') {
//        setHasPermission(true); // Assuming permission is handled via Info.plist
//      }
//    };
//
//    requestCameraPermission();
//  }, []);
//
//
//
//  // Ensure the device is available before rendering the Camera component
//  if (frontDevice == null) {
//    return <View style={styles.container}><Text>Loading camera...</Text></View>;
//  }
//
//  return (
//    <View style={styles.container}>
//      <Camera
//        style={StyleSheet.absoluteFill} // Adjust styling as needed
//        device={frontDevice}
//        isActive={true}
//      />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});
//
//export default App;







//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native';
//import { initializeApp } from '@firebase/app';
//import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import axios from 'axios';
//import { DataTable } from 'react-native-paper';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//
//import AuthScreen from './src/AuthScreen.js';
//import AttendanceTable from './src/AttendanceTable.js';
//import Hello from './src/Hello.js';
//
//
//const firebaseConfig = {
//  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
//  authDomain: "recognition-1bf05.firebaseapp.com",
//  projectId: "recognition-1bf05",
//  storageBucket: "recognition-1bf05.appspot.com",
//  messagingSenderId: "428104914028",
//  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
//  measurementId: "G-BMFXKWXBM3"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Configure Google Sign-In
//GoogleSignin.configure({
//  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
//});
//
//
//const App = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [isLogin, setIsLogin] = useState(true);
//
//  const auth = getAuth(app);
//
//  useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (user) => {
//      setUser(user)
//    });
//    return () => unsubscribe();
//  }, [auth]);
//
//  const handleAuthentication = async () => {
//    try {
//      if (isLogin) {
//        // Sign in
//        await signInWithEmailAndPassword(auth, email, password);
//        console.log('User signed in successfully!');
//      } else {
//        // Sign up
//        await createUserWithEmailAndPassword(auth, email, password);
//        console.log('User created successfully!');
//      }
//    } catch (error) {
//      console.error('Authentication error:', error.message);
//    }
//  };
//
//  const handleGoogleSignIn = async () => {
//    try {
//      if (Platform.OS === 'android') {
//        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.GET_ACCOUNTS);
//      }
//      await GoogleSignin.hasPlayServices();
//      const { idToken } = await GoogleSignin.signIn();
//      const googleCredential = GoogleAuthProvider.credential(idToken);
//      await signInWithCredential(auth, googleCredential);
//      console.log('User signed in with Google!');
//    } catch (error) {
//      console.error('Google Sign-In error:', error.message);
//    }
//  };
//
//
//
//  return (
//    <SafeAreaView style={styles.container}>
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        <Text style={styles.title}>Attendance Records</Text>
//        { user ? (
//          <AttendanceTable />
//        ) : (
//          <AuthScreen
//            email={email}
//            setEmail={setEmail}
//            password={password}
//            setPassword={setPassword}
//            isLogin={isLogin}
//            setIsLogin={setIsLogin}
//            handleAuthentication={handleAuthentication}
//            handleGoogleSignIn={handleGoogleSignIn}
//          />
//        )}
//      </ScrollView>
//    </SafeAreaView>
//  );
//};
//
//const styles = StyleSheet.create({
//
//    button: {
////    color: 'black',
////    backgroundColor: 'red',
//    alignItems: 'center',
//    marginBottom: '5%',
//    marginTop: '5%',
//    width: '100%',
//    },
//
//
//
//     container: {
//        flex: 1,
//        backgroundColor: '#fff',
////        alignItems: 'center',
////        justifyContent: 'flex-start',
////        padding: 16,
//    },
////    title: {
////        fontSize: 24,
////        fontWeight: 'bold',
////        marginBottom: 20,
////    },
//    scrollView: {
//        flex: 1,
//        width: '100%',
//    },
//    tableContainer: {
//        width: '100%',
////        paddingHorizontal: 16,
//    },
//
//    loader: {
//        flex: 1,
//        justifyContent: 'center',
//    },
//
//
////    container: {
////        flex: 1,
////    },
//    scrollContainer: {
//        flexGrow: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//    },
//    authContainer: {
//        width: '100%',
//        maxWidth: 400,
//        backgroundColor: '#fff',
//        padding: 16,
//        borderRadius: 8,
//        elevation: 3,
//    },
//    title: {
//        fontSize: 24,
//        marginBottom: 16,
//        textAlign: 'center',
//    },
//    input: {
//        color: 'black',
//        height: 40,
//        borderColor: '#ddd',
//        borderWidth: 1,
//        marginBottom: 16,
//        padding: 8,
//        borderRadius: 4,
//    },
//    buttonContainer: {
//        marginBottom: 16,
//    },
//    toggleText: {
//        color: '#3498db',
//        textAlign: 'center',
//    },
//    bottomContainer: {
//        marginTop: 20,
//    },
//});
//
//export default App;





//MAIN WORKING CODE THAT WE NEED
//import React from 'react';
//import AppNavigator from './AppNavigator.js';
//import DetailsScreen from './DetailsScreen'
//import HomeScreen from './HomeScreen'
//
//
//
//const App = () => {
//  return <AppNavigator />;
//};
//
//export default App;

//import React from 'react';
//import { View, StyleSheet } from 'react-native';
//import DetailsScreen from './DetailsScreen'; // Adjust the path as needed
//import FaceApiWebView from './FaceApiWebView'; // Adjust the path as needed
//
//const App = () => {
//  return (
//    <View style={StyleSheet.absoluteFillObject}>
//      <DetailsScreen />
//      <FaceApiWebView />
//    </View>
//  );
//};
//
//export default App;


//import React, { useEffect, useRef, useState } from 'react';
//import { View, Button, Text, Alert } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//import * as tf from '@tensorflow/tfjs';
////import { FaceMesh } from '@mediapipe/face_mesh.js';
//import * as facemesh from '@mediapipe/face_mesh';
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const cameraRef = useRef(null);
//
//  const devices = useCameraDevices();
//  const device = devices.find(device => device.position === 'front');
//
//  useEffect(() => {
//    const loadModel = async () => {
//      try {
//        // Initialize MediaPipe Face Mesh
//        const faceMesh = new FaceMesh({
//          maxNumFaces: 1, // Adjust based on your use case
//          refineLandmarks: true,
//        });
//        await faceMesh.initialize();
//        setModel(faceMesh);
//        console.log('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//      }
//    };
//
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    if (cameraRef.current) {
//      try {
//        console.log('Capturing photo...');
//        const photo = await cameraRef.current.takePhoto({
//          skipProcessing: true,
//        });
//        console.log('Photo captured:', photo.uri);
//        setPhotoUri(photo.uri);
//        processImage(photo.uri);
//      } catch (error) {
//        console.error('Error capturing photo:', error);
//      }
//    }
//  };
//
//  const processImage = async (uri) => {
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//        const response = await fetch(uri);
//        const blob = await response.blob();
//        const imageBitmap = await createImageBitmap(blob);
//
//        // Process the image using MediaPipe Face Mesh
//        const predictions = await model.send({ image: imageBitmap });
//        console.log('Predictions:', predictions);
//
//        if (predictions.length > 0) {
//          const isKnownFace = checkIfKnownFace(predictions);
//          if (isKnownFace) {
//            setStatusMessage('Face Recognized');
//            console.log('Face recognized');
//          } else {
//            setStatusMessage('Stranger');
//            console.log('Stranger detected');
//            Alert.alert('Face Recognition', 'Stranger detected.');
//          }
//        } else {
//          setStatusMessage('No Faces Detected');
//          console.log('No faces detected in the image.');
//          Alert.alert('Face Recognition', 'No faces detected in the image.');
//        }
//      } else {
//        console.warn('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//    }
//  };
//
//  const checkIfKnownFace = (predictions) => {
//    // Initialize knownFaceDescriptors if needed
//    const knownFaceDescriptors = []; // Replace this with your actual known face descriptors
//
//    if (knownFaceDescriptors.length === 0) {
//      console.warn('No known face descriptors available');
//      return false;
//    }
//
//    return predictions.some(prediction => {
//      // Process landmarks or face descriptors to check for similarity
//      const detectedDescriptor = prediction.landmarks; // Example: Ensure prediction.landmarks is valid
//
//      console.log('Detected Descriptor:', detectedDescriptor);
//
//      return knownFaceDescriptors.some(knownDescriptor => {
//        // Assuming knownDescriptor is an array or tensor that can be compared
//        const similarity = tf.losses.cosineDistance(detectedDescriptor, knownDescriptor, 0).dataSync()[0];
//        console.log('Similarity:', similarity);
//        return similarity < 0.5;
//      });
//    });
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      {device && (
//        <Camera
//          ref={cameraRef}
//          style={{ flex: 1 }}
//          device={device}
//          isActive={true}
//        />
//      )}
//      <Button title="Take Photo" onPress={takePhoto} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      <Text>Status: {statusMessage}</Text>
//    </View>
//  );
//};
//
//export default CameraComponent;


//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-node'; // Use tfjs-node for native support
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs'; // Use react-native-fs for file system operations
//
//const createFaceMesh = async (imageURI) => {
//  try {
//    await tf.ready();
//    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
//
//    // You need to host these model files somewhere accessible, or use TensorFlow's model URL if available
//    const modelJson = require('../../assets/model.json'); // Make sure this path is correct
//    const modelWeights = require('../../assets/group1-shard1of1.bin'); // Make sure this path is correct
//
//    const detectorConfig = {
//      runtime: 'tfjs',
//      landmarkModelUrl: modelJson, // Use URL if not using local files
//      weightsManifest: modelWeights,
//    };
//
//    let detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
//
//    const estimationConfig = { flipHorizontal: false, staticImageMode: true };
//
//    // Read the image file as base64 string
//    const imgB64 = await RNFS.readFile(imageURI, 'base64');
//    const imgBuffer = Buffer.from(imgB64, 'base64');
//    const imageTensor = decodeJpeg(new Uint8Array(imgBuffer));
//
//    console.log(imageTensor);
//
//    let faceMesh = await detector.estimateFaces(imageTensor, estimationConfig);
//    console.log(faceMesh);
//  } catch (error) {
//    console.error('Error creating face mesh:', error);
//  }
//};
//
//export default createFaceMesh;


//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Button, Text, Alert } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs'; // Ensure RNFS is installed
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isPending, startTransition] = useTransition();
//
//  useEffect(() => {
//    const loadModel = async () => {
//      try {
//        await tf.ready();
//
//        // Local file paths (update these as per your structure)
//        const modelJsonPath = RNFS.DocumentDirectoryPath + '/models/model.json'; // Use DocumentDirectoryPath for Android
//        const modelWeightsPath = RNFS.DocumentDirectoryPath + '/models/group1-shard1of1.bin';
//
//        const modelJson = await RNFS.readFile(modelJsonPath, 'utf8');
//        const modelWeights = await RNFS.readFile(modelWeightsPath, 'base64');
//
//        const detectorConfig = {
//          runtime: 'tfjs',
//          landmarkModelUrl: modelJson,
//          weightsManifest: modelWeights,
//        };
//
//        const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
//        let detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
//        setModel(detector);
//        console.log('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//      }
//    };
//
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Add your code to capture a photo here
//    // For now, simulate capturing a photo URI
//    const photoUri = 'path_to_your_photo'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//        const imgB64 = await RNFS.readFile(uri, 'base64');
//        const imgBuffer = Buffer.from(imgB64, 'base64');
//        const imageTensor = decodeJpeg(new Uint8Array(imgBuffer));
//
//        let faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        console.log(faceMesh);
//
//        // Handle faceMesh results
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      <Button title="Take Photo" onPress={takePhoto} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isPending && <Text>Loading...</Text>}
//    </View>
//  );
//};
//
//export default CameraComponent;


//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Button, Text, Alert } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isPending, startTransition] = useTransition();
//
//  useEffect(() => {
//    const loadModel = async () => {
//      try {
//        await tf.ready();
//
//        // URLs for model files
//        const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//        const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//        // Initialize the face landmark detector
//        const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
//        let detector = await faceLandmarksDetection.createDetector(model, {
//          runtime: 'tfjs',
//          landmarkModelUrl: modelJsonUrl, // URL to the model JSON
//          weightsManifest: modelWeightsUrl, // URL to the weights binary
//        });
//        setModel(detector);
//        console.log('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//      }
//    };
//
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Simulate capturing a photo URI
//    const photoUri = 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//        // Note: Ensure you have proper method to load image from URI
//        // Here it is assumed that `uri` is a valid local file path or URL that can be read as base64
//        const imgB64 = await fetch(uri).then(res => res.blob()).then(blob => blob.arrayBuffer()).then(buffer => Buffer.from(buffer).toString('base64'));
//        const imgBuffer = Buffer.from(imgB64, 'base64');
//        const imageTensor = decodeJpeg(new Uint8Array(imgBuffer));
//
//        let faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      <Button title="Take Photo" onPress={takePhoto} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isPending && <Text>Loading...</Text>}
//    </View>
//  );
//};
//
//export default CameraComponent;

//import {
//  decodeJpeg
//} from '@tensorflow/tfjs-react-native';
//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Button, Text, Alert } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-core';
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//
//// import 'expo-gl';
//// import '@tensorflow/tfjs-backend-webgl';
//// import * as FileSystem from 'expo-file-system';
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [error, setError] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isPending, startTransition] = useTransition();
//
//  useEffect(() => {
//    const loadModel = async () => {
//      try {
//        await tf.ready();
//
//        const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//        const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//        const detectorConfig = {
//          runtime: 'tfjs',
//          landmarkModelUrl: modelJsonUrl,
//          weightsManifest: modelWeightsUrl
//        };
//
//        let detector = await faceLandmarksDetection.createDetector(faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh, detectorConfig);
//        setModel(detector);
//        console.log('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//      }
//    };
//
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Simulate capturing a photo URI
//    const photoUri = 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425744_riceatta.jpg'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//
//        // Load the image as base64 string and then convert to tensor
//        const imgB64 = await fetch(uri).then(res => res.blob()).then(blob => blob.arrayBuffer()).then(buffer => Buffer.from(buffer).toString('base64'));
//        const imgBuffer = Buffer.from(imgB64, 'base64');
//        const imageTensor = decodeJpeg(new Uint8Array(imgBuffer));
//
//        let faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      <Button title="Take Photo" onPress={takePhoto} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isPending && <Text>Loading...</Text>}
//    </View>
//  );
//};
//
//export default CameraComponent;

//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Button, Text, ActivityIndicator } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-core';
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//import  
// { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs';
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isLoading, setIsLoading] = useState(false);
//  const [isPending, startTransition] = useTransition();
//
//  useEffect(() => {
//    const loadModel = async () => {
//      setIsLoading(true);
//
//      try {
//        await tf.ready();
//
//        const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//        const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//        // Download model files
//        const [modelJson, modelWeights] = await Promise.all([
//          fetch(modelJsonUrl).then((response) => response.arrayBuffer()),
//          fetch(modelWeightsUrl).then((response) => response.arrayBuffer()),
//        ]);
//
//        const modelJsonData = new Uint8Array(modelJson);
//        const modelWeightsData = new Uint8Array(modelWeights);
//
//        // Convert to TensorFlow.js SavedModel
//        const model = await tf.browser.toSavedModel({
//          modelUrl: URL.createObjectURL(new Blob([modelJsonData])),
//          weights: [{ name: '', data: modelWeightsData }],
//        });
//
//        setModel(model);
//        console.log('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//        setStatusMessage('Error loading model');
//      } finally {
//        setIsLoading(false);
//      }
//    };
//
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Simulate capturing a photo URI
//    const photoUri = 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425744_riceatta.jpg'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    setIsLoading(true);
//
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//
//        const localFilePath = `${RNFS.CachesDirectoryPath}/temp.jpg`;
//        await RNFS.downloadFile({ fromUrl: uri, toFile: localFilePath }).promise;
//
//        const imgBase64 = await RNFS.readFile(localFilePath, 'base64');
//        const imageTensor = decodeJpeg(new Uint8Array(Buffer.from(imgBase64, 'base64')));
//
//        const faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//        setStatusMessage('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//      setStatusMessage('Error processing image');
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      <Button title="Take Photo" onPress={takePhoto} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//    </View>
//  );
//};
//
//export default CameraComponent;

//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Button, Text, ActivityIndicator } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-core';
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs';
//import 'whatwg-fetch'; // Polyfill fetch
//
//// Define model paths (ensure these paths are correct relative to your project)
//const MODEL_JSON_PATH = 'file:///android_asset/models/model.json'; // Correct path for Android
//const WEIGHTS_PATH = 'file:///android_asset/models/group1-shard1of1.bin'; // Correct path for Android
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isLoading, setIsLoading] = useState(false);
//  const [isPending, startTransition] = useTransition();
//
//  useEffect(() => {
//    const loadModel = async () => {
//      setIsLoading(true);
//
//      try {
//        await tf.ready();
//
//        const detectorConfig = {
//          runtime: 'tfjs',
//          landmarkModelUrl: MODEL_JSON_PATH,
//          weightsManifest: WEIGHTS_PATH,
//        };
//
//        const detector = await faceLandmarksDetection.createDetector(
//          faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
//          detectorConfig
//        );
//        setModel(detector);
//        console.log('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//        setStatusMessage('Error loading model');
//      } finally {
//        setIsLoading(false);
//      }
//    };
//
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Simulate capturing a photo URI
//    const photoUri = 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425744_riceatta.jpg'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    setIsLoading(true);
//
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//
//        const localFilePath = `${RNFS.CachesDirectoryPath}/temp.jpg`;
//        await RNFS.downloadFile({ fromUrl: uri, toFile: localFilePath }).promise;
//
//        const imgBase64 = await RNFS.readFile(localFilePath, 'base64');
//        const imageTensor = decodeJpeg(new Uint8Array(Buffer.from(imgBase64, 'base64')));
//
//        const faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//        setStatusMessage('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//      setStatusMessage('Error processing image');
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      <Button title="Take Photo" onPress={takePhoto} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//    </View>
//  );
//};
//
//export default CameraComponent;



//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Text, ActivityIndicator, Modal, Button } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-core';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs';
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isLoading, setIsLoading] = useState(false);
//  const [modalVisible, setModalVisible] = useState(false);
//  const [isPending, startTransition] = useTransition();
//
//  useEffect(() => {
//    const loadModel = async () => {
//      setModalVisible(true); // Show modal when starting to load the model
//      setIsLoading(true);
//
//      try {
//        await tf.ready();
//
//        const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//        const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//        // Download model files
//        const [modelJson, modelWeights] = await Promise.all([
//          fetch(modelJsonUrl).then((response) => response.arrayBuffer()),
//          fetch(modelWeightsUrl).then((response) => response.arrayBuffer()),
//        ]);
//
//        const modelJsonData = new Uint8Array(modelJson);
//        const modelWeightsData = new Uint8Array(modelWeights);
//
//        // Convert to TensorFlow.js SavedModel
//        const model = await tf.browser.toSavedModel({
//          modelUrl: URL.createObjectURL(new Blob([modelJsonData])),
//          weights: [{ name: '', data: modelWeightsData }],
//        });
//
//        setModel(model);
//        console.log('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//        setStatusMessage('Error loading model');
//      } finally {
//        setIsLoading(false);
//        setModalVisible(false); // Hide modal when done
//      }
//    };
//
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Simulate capturing a photo URI
//    const photoUri = 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425744_riceatta.jpg'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    setIsLoading(true);
//
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//
//        const localFilePath = `${RNFS.CachesDirectoryPath}/temp.jpg`;
//        await RNFS.downloadFile({ fromUrl: uri, toFile: localFilePath }).promise;
//
//        const imgBase64 = await RNFS.readFile(localFilePath, 'base64');
//        const imageTensor = decodeJpeg(new Uint8Array(Buffer.from(imgBase64, 'base64')));
//
//        const faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//        setStatusMessage('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//      setStatusMessage('Error processing image');
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      {/* Loading Modal */}
//      <Modal
//        transparent={true}
//        visible={modalVisible}
//        animationType="slide"
//      >
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <ActivityIndicator size="large" color="#0000ff" />
//          <Text>Loading Model...</Text>
//        </View>
//      </Modal>
//
//      {/* Camera Component UI */}
//      <Button title="Take Photo" onPress={takePhoto} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//    </View>
//  );
//};
//
//export default CameraComponent;


//wroking fetch api and arraybuffer code snippet
//import React, { useEffect, useState } from 'react';
//import { View, Text, ActivityIndicator } from 'react-native';
//
//const FetchTest = () => {
//  const [data, setData] = useState(null);
//  const [error, setError] = useState(null);
//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    const fetchModelData = async () => {
//      try {
//        // Fetch the model JSON file as ArrayBuffer
//        const response = await fetch('https://attendance.mietjmu.in/models/model.json');
//        const arrayBuffer = await response.arrayBuffer();
//
//        // Convert ArrayBuffer to string
//        const text = arrayBufferToString(arrayBuffer);
//
//        // Parse JSON string
//        const result = JSON.parse(text);
//        setData(result);
//      } catch (err) {
//        setError(err.message);
//      } finally {
//        setLoading(false);
//      }
//    };
//
//    fetchModelData();
//  }, []);
//
//  const arrayBufferToString = (buffer) => {
//    const bytes = new Uint8Array(buffer);
//    let string = '';
//    for (let i = 0; i < bytes.byteLength; i++) {
//      string += String.fromCharCode(bytes[i]);
//    }
//    return string;
//  };
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" />;
//  }
//
//  if (error) {
//    return <Text>Error: {error}</Text>;
//  }
//
//  return <Text>Fetched Data: {JSON.stringify(data)}</Text>;
//};
//
//export default FetchTest;



//working fetch data using tensorflow
//import React, { useState, useEffect } from 'react';
//import { View, Text, ActivityIndicator, Button } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//
//const FetchCheck = () => {
//  const [model, setModel] = useState(null);
//  const [response, setResponse] = useState(null);
//  const [error, setError] = useState(null);
//  const [loading, setLoading] = useState(false);
//
//  const loadModel = async () => {
//    setLoading(true);
//    setError(null); // Clear previous errors
//    try {
//      await tf.ready();
//
//      const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//      const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//      const [modelJson, modelWeights] = await Promise.all([
//        fetch(modelJsonUrl).then((response) => response.arrayBuffer()),
//        fetch(modelWeightsUrl).then((response) => response.arrayBuffer()),
//      ]);
//
//      // Handle model loading
//      console.log('Model files fetched');
//      // Assuming you have a way to load the model from the fetched data
//      setModel('Loaded Model'); // Replace with actual model loading logic
//    } catch (error) {
//      console.error('Error loading model:', error);
//      setError(error.message);
//    } finally {
//      setLoading(false);
//    }
//  };
//
//  useEffect(() => {
//    loadModel();
//  }, []);
//
//  const testFetch = async () => {
//    setLoading(true);
//    try {
//      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//      const data = await res.json();
//      setResponse(data);
//    } catch (err) {
//      setError(err.message);
//    } finally {
//      setLoading(false);
//    }
//  };
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" />;
//  }
//
//  return (
//    <View>
//      <Button title="Test Fetch" onPress={testFetch} />
//      {response && <Text>Response: {JSON.stringify(response)}</Text>}
//      {error && <Text>Error: {error}</Text>}
//    </View>
//  );
//};
//
//export default FetchCheck;

//working code with image processing error
//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Text, ActivityIndicator, Modal, Button } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs';
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isLoading, setIsLoading] = useState(false);
//  const [modalVisible, setModalVisible] = useState(false);
//  const [isPending, startTransition] = useTransition();
//  const [response, setResponse] = useState(null);
//  const [error, setError] = useState(null);
//
//  const loadModel = async () => {
//    setModalVisible(true); // Show modal when starting to load the model
//    setIsLoading(true);
//    setError(null); // Clear previous errors
//
//    try {
//      await tf.ready();
//
//      const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//      const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//      const [modelJson, modelWeights] = await Promise.all([
//        fetch(modelJsonUrl).then((response) => response.arrayBuffer()),
//        fetch(modelWeightsUrl).then((response) => response.arrayBuffer()),
//      ]);
//
//      const modelJsonData = new Uint8Array(modelJson);
//      const modelWeightsData = new Uint8Array(modelWeights);
//
//      // Load model logic (update as needed)
//      console.log('Model files fetched');
//      // Assuming you have a way to load the model from the fetched data
//      setModel('Loaded Model'); // Replace with actual model loading logic
//      setStatusMessage('Model loaded successfully');
//    } catch (error) {
//      console.error('Error loading model:', error);
//      setStatusMessage('Error loading model');
//      setError(error.message);
//    } finally {
//      setIsLoading(false);
//      setModalVisible(false); // Hide modal when done
//    }
//  };
//
//  useEffect(() => {
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Simulate capturing a photo URI
//    const photoUri = 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425744_riceatta.jpg'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    setIsLoading(true);
//
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//
//        const localFilePath = `${RNFS.CachesDirectoryPath}/temp.jpg`;
//        await RNFS.downloadFile({ fromUrl: uri, toFile: localFilePath }).promise;
//
//        const imgBase64 = await RNFS.readFile(localFilePath, 'base64');
//        const imageTensor = decodeJpeg(new Uint8Array(Buffer.from(imgBase64, 'base64')));
//
//        // Update with the actual face detection logic
//        // const faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        // console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//        setStatusMessage('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//      setStatusMessage('Error processing image');
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  const testFetch = async () => {
//    setIsLoading(true);
//    try {
//      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//      const data = await res.json();
//      setResponse(data);
//    } catch (err) {
//      setError(err.message);
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      {/* Loading Modal */}
//      <Modal
//        transparent={true}
//        visible={modalVisible}
//        animationType="slide"
//      >
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <ActivityIndicator size="large" color="#0000ff" />
//          <Text>Loading Model...</Text>
//        </View>
//      </Modal>
//
//      {/* Camera Component UI */}
//      <Button title="Take Photo" onPress={takePhoto} />
//      <Button title="Test Fetch" onPress={testFetch} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      {response && <Text>Response: {JSON.stringify(response)}</Text>}
//      {error && <Text>Error: {error}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//    </View>
//  );
//};
//
//export default CameraComponent;

//working but image format error
//import React, { useState, useEffect, useTransition } from 'react';
//import { View, Text, ActivityIndicator, Modal, Button } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs';
//
//// Polyfill for atob (base64 decoding)
//const atob = (str) => {
//  const binaryString = global.btoa(str);
//  const len = binaryString.length;
//  const bytes = new Uint8Array(len);
//  for (let i = 0; i < len; i++) {
//    bytes[i] = binaryString.charCodeAt(i);
//  }
//  return bytes.buffer;
//};
//
//// Convert base64 to ArrayBuffer
//const base64ToArrayBuffer = (base64) => {
//  const binaryString = atob(base64);
//  const len = binaryString.length;
//  const bytes = new Uint8Array(len);
//  for (let i = 0; i < len; i++) {
//    bytes[i] = binaryString.charCodeAt(i);
//  }
//  return bytes.buffer;
//};
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isLoading, setIsLoading] = useState(false);
//  const [modalVisible, setModalVisible] = useState(false);
//  const [isPending, startTransition] = useTransition();
//  const [response, setResponse] = useState(null);
//  const [error, setError] = useState(null);
//
//  const loadModel = async () => {
//    setModalVisible(true); // Show modal when starting to load the model
//    setIsLoading(true);
//    setError(null); // Clear previous errors
//
//    try {
//      await tf.ready();
//
//      const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//      const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//      const [modelJson, modelWeights] = await Promise.all([
//        fetch(modelJsonUrl).then((response) => response.arrayBuffer()),
//        fetch(modelWeightsUrl).then((response) => response.arrayBuffer()),
//      ]);
//
//      const modelJsonData = new Uint8Array(modelJson);
//      const modelWeightsData = new Uint8Array(modelWeights);
//
//      // Load model logic (update as needed)
//      console.log('Model files fetched');
//      // Assuming you have a way to load the model from the fetched data
//      setModel('Loaded Model'); // Replace with actual model loading logic
//      setStatusMessage('Model loaded successfully');
//    } catch (error) {
//      console.error('Error loading model:', error);
//      setStatusMessage('Error loading model');
//      setError(error.message);
//    } finally {
//      setIsLoading(false);
//      setModalVisible(false); // Hide modal when done
//    }
//  };
//
//  useEffect(() => {
//    loadModel();
//  }, []);
//
//  const takePhoto = async () => {
//    // Simulate capturing a photo URI
//    const photoUri = 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'; // Replace with actual photo URI
//    console.log('Capturing photo...');
//    setPhotoUri(photoUri);
//    startTransition(() => {
//      processImage(photoUri);
//    });
//  };
//
//  const processImage = async (uri) => {
//    setIsLoading(true);
//
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//
//        const localFilePath = `${RNFS.CachesDirectoryPath}/temp.jpg`;
//        await RNFS.downloadFile({ fromUrl: uri, toFile: localFilePath }).promise;
//
//        const imgBase64 = await RNFS.readFile(localFilePath, 'base64');
//        const imageArrayBuffer = base64ToArrayBuffer(imgBase64);
//        const imageTensor = decodeJpeg(imageArrayBuffer);
//
//        // Update with the actual face detection logic
//        // const faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        // console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//        setStatusMessage('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//      setStatusMessage('Error processing image');
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  const testFetch = async () => {
//    setIsLoading(true);
//    try {
//      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//      const data = await res.json();
//      setResponse(data);
//    } catch (err) {
//      setError(err.message);
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      {/* Loading Modal */}
//      <Modal
//        transparent={true}
//        visible={modalVisible}
//        animationType="slide"
//      >
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <ActivityIndicator size="large" color="#0000ff" />
//          <Text>Loading Model...</Text>
//        </View>
//      </Modal>
//
//      {/* Camera Component UI */}
//      <Button title="Take Photo" onPress={takePhoto} />
//      <Button title="Test Fetch" onPress={testFetch} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      {response && <Text>Response: {JSON.stringify(response)}</Text>}
//      {error && <Text>Error: {error}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//    </View>
//  );
//};
//
//export default CameraComponent;


//import React, { useState, useEffect } from 'react';
//import { View, Text, ActivityIndicator, Modal, Button } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs';
//import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
//
//// Convert base64 to ArrayBuffer
//const base64ToArrayBuffer = (base64) => {
//  const binaryString = atob(base64);
//  const len = binaryString.length;
//  const bytes = new Uint8Array(len);
//  for (let i = 0; i < len; i++) {
//    bytes[i] = binaryString.charCodeAt(i);
//  }
//  return bytes.buffer;
//};
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isLoading, setIsLoading] = useState(false);
//  const [modalVisible, setModalVisible] = useState(false);
//  const [response, setResponse] = useState(null);
//  const [error, setError] = useState(null);
//
//  const loadModel = async () => {
//    setModalVisible(true); // Show modal when starting to load the model
//    setIsLoading(true);
//    setError(null); // Clear previous errors
//
//    try {
//      await tf.ready();
//
//      const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//      const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//      const [modelJson, modelWeights] = await Promise.all([
//        fetch(modelJsonUrl).then((response) => response.arrayBuffer()),
//        fetch(modelWeightsUrl).then((response) => response.arrayBuffer()),
//      ]);
//
//      const modelJsonData = new Uint8Array(modelJson);
//      const modelWeightsData = new Uint8Array(modelWeights);
//
//      // Load model logic (update as needed)
//      console.log('Model files fetched');
//      // Assuming you have a way to load the model from the fetched data
//      setModel('Loaded Model'); // Replace with actual model loading logic
//      setStatusMessage('Model loaded successfully');
//    } catch (error) {
//      console.error('Error loading model:', error);
//      setStatusMessage('Error loading model');
//      setError(error.message);
//    } finally {
//      setIsLoading(false);
//      setModalVisible(false); // Hide modal when done
//    }
//  };
//
//  useEffect(() => {
//    loadModel();
//  }, []);
//
//  const openImagePicker = () => {
//    launchImageLibrary({ mediaType: 'photo' }, (response) => {
//      if (response.didCancel) {
//        console.log('User cancelled image picker');
//      } else if (response.errorCode) {
//        console.log('ImagePicker Error: ', response.errorMessage);
//      } else {
//        const { uri } = response.assets[0];
//        setPhotoUri(uri);
//        processImage(uri);
//      }
//    });
//  };
//
//  const openCamera = () => {
//    launchCamera({ mediaType: 'photo' }, (response) => {
//      if (response.didCancel) {
//        console.log('User cancelled image picker');
//      } else if (response.errorCode) {
//        console.log('ImagePicker Error: ', response.errorMessage);
//      } else {
//        const { uri } = response.assets[0];
//        setPhotoUri(uri);
//        processImage(uri);
//      }
//    });
//  };
//
//  const processImage = async (uri) => {
//    setIsLoading(true);
//
//    try {
//      if (model) {
//        console.log('Processing image:', uri);
//
//        // Convert the local file URI to base64
//        const imgBase64 = await RNFS.readFile(uri, 'base64');
//        const imageArrayBuffer = base64ToArrayBuffer(imgBase64);
//
//        // Check and decode image
//        const imageTensor = decodeJpeg(new Uint8Array(imageArrayBuffer));
//
//        // Example of how to use the model (update as needed)
//         const faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//         console.log(faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//        setStatusMessage('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//      setStatusMessage('Error processing image');
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  const testFetch = async () => {
//    setIsLoading(true);
//    try {
//      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//      const data = await res.json();
//      setResponse(data);
//    } catch (err) {
//      setError(err.message);
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      {/* Loading Modal */}
//      <Modal
//        transparent={true}
//        visible={modalVisible}
//        animationType="slide"
//      >
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <ActivityIndicator size="large" color="#0000ff" />
//          <Text>Loading Model...</Text>
//        </View>
//      </Modal>
//
//      {/* Camera Component UI */}
//      <Button title="Open Camera" onPress={openCamera} />
//      <Button title="Open Image Picker" onPress={openImagePicker} />
//      <Button title="Test Fetch" onPress={testFetch} />
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      {response && <Text>Response: {JSON.stringify(response)}</Text>}
//      {error && <Text>Error: {error}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//    </View>
//  );
//};
//
//export default CameraComponent;

//decodeJpeg } from '@tensorflow/tfjs-react-native'; final code
//import React, { useState, useEffect } from 'react';
//import { View, Text, ActivityIndicator, Modal, Button, Platform } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import RNFS from 'react-native-fs';
//import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
//
//// Convert base64 to ArrayBuffer
//const base64ToArrayBuffer = (base64) => {
//  const binaryString = atob(base64);
//  const len = binaryString.length;
//  const bytes = new Uint8Array(len);
//  for (let i = 0; i < len; i++) {
//    bytes[i] = binaryString.charCodeAt(i);
//  }
//  return bytes.buffer;
//};
//
//// Helper function for XMLHttpRequest
//const requestData = (url, callback) => {
//  const xhr = new XMLHttpRequest();
//  xhr.open('GET', url, true);
//  xhr.responseType = 'arraybuffer'; // Setting response type to arraybuffer
//
//  xhr.onload = () => {
//    if (xhr.status === 200) {
//      callback(null, xhr.response);
//    } else {
//      callback(new Error(`HTTP error: ${xhr.status}`), null);
//    }
//  };
//
//  xhr.onerror = () => {
//    callback(new Error('Network error'), null);
//  };
//
//  xhr.send();
//};
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const [isLoading, setIsLoading] = useState(false);
//  const [modalVisible, setModalVisible] = useState(false);
//  const [response, setResponse] = useState(null);
//  const [error, setError] = useState(null);
//  const [imageFormat, setImageFormat] = useState(null);
//
//  const loadModel = async () => {
//    setModalVisible(true);
//    setIsLoading(true);
//    setError(null);
//
//    try {
//      await tf.ready();
//
//      const modelJsonUrl = 'https://attendance.mietjmu.in/models/model.json';
//      const modelWeightsUrl = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//      // Use XMLHttpRequest to get model files
//      const [modelJson, modelWeights] = await Promise.all([
//        new Promise((resolve, reject) => {
//          requestData(modelJsonUrl, (err, response) => {
//            if (err) reject(err);
//            else resolve(response);
//          });
//        }),
//        new Promise((resolve, reject) => {
//          requestData(modelWeightsUrl, (err, response) => {
//            if (err) reject(err);
//            else resolve(response);
//          });
//        })
//      ]);
//
//      // Convert ArrayBuffer to Uint8Array
//      const modelJsonData = new Uint8Array(modelJson);
//      const modelWeightsData = new Uint8Array(modelWeights);
//
//      // Load model logic (update as needed)
//      console.log('Model files fetched');
//      // Assuming you have a way to load the model from the fetched data
//      setModel('Loaded Model'); // Replace with actual model loading logic
//      setStatusMessage('Model loaded successfully');
//    } catch (error) {
//      console.error('Error loading model:', error);
//      setStatusMessage('Error loading model');
//      setError(error.message);
//    } finally {
//      setIsLoading(false);
//      setModalVisible(false);
//    }
//  };
//
//  useEffect(() => {
//    loadModel();
//  }, []);
//
//  const openCamera = () => {
//    launchCamera({ mediaType: 'photo' }, (response) => {
//      if (response.didCancel) {
//        console.log('User cancelled camera');
//      } else if (response.errorCode) {
//        console.log('ImagePicker Error: ', response.errorMessage);
//      } else {
//        const { uri, type } = response.assets[0];
//        console.log('Photo taken from camera:', uri);
//        const format = getImageFormat(type);
//        console.log('Image format:', format);
//        setImageFormat(format);
//        setPhotoUri(uri);
//        processImage(uri);
//      }
//    });
//  };
//
//  const openImagePicker = () => {
//    launchImageLibrary({ mediaType: 'photo' }, (response) => {
//      if (response.didCancel) {
//        console.log('User cancelled image picker');
//      } else if (response.errorCode) {
//        console.log('ImagePicker Error: ', response.errorMessage);
//      } else {
//        const { uri, type } = response.assets[0];
//        console.log('Image picked from library:', uri);
//        const format = getImageFormat(type);
//        console.log('Image format:', format);
//        setImageFormat(format);
//        setPhotoUri(uri);
//        processImage(uri);
//      }
//    });
//  };
//
//  const processImage = async (uri) => {
//    setIsLoading(true);
//    setStatusMessage('Processing image...');
//    console.log('Processing image at URI:', uri);
//
//    try {
//      if (model) {
//        console.log('Model is loaded, proceeding with image processing');
//
//        // Convert the local file URI to base64
//        console.log('Reading image file as base64...');
//        const imgBase64 = await RNFS.readFile(uri, 'base64');
//        console.log('Base64 image read successfully. Length of Base64 string:', imgBase64.length);
//
//        // Convert Base64 string to ArrayBuffer
//        console.log('Converting Base64 to ArrayBuffer...');
//        const imageArrayBuffer = base64ToArrayBuffer(imgBase64);
//        console.log('Base64 to ArrayBuffer conversion done. Length of ArrayBuffer:', imageArrayBuffer.byteLength);
//
//        // Decode image from ArrayBuffer
//        console.log('Decoding image...');
//        const imageTensor = decodeJpeg(new Uint8Array(imageArrayBuffer));
//        console.log('Image tensor created with shape:', imageTensor.shape);
//
//        // Use the model to estimate faces
//        console.log('Estimating faces...');
//        const faceMesh = await model.estimateFaces(imageTensor, { flipHorizontal: false, staticImageMode: true });
//        console.log('Face mesh estimation completed:', faceMesh);
//
//        setStatusMessage('Face Mesh processed');
//      } else {
//        console.warn('Model not loaded');
//        setStatusMessage('Model not loaded');
//      }
//    } catch (error) {
//      console.error('Error processing image:', error);
//      setStatusMessage('Error processing image');
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  const testFetch = async () => {
//    setIsLoading(true);
//    try {
//      console.log('Fetching test data...');
//      const url = 'https://jsonplaceholder.typicode.com/todos/1';
//      const [data] = await new Promise((resolve, reject) => {
//        requestData(url, (err, response) => {
//          if (err) reject(err);
//          else {
//            const json = JSON.parse(new TextDecoder().decode(response));
//            resolve(json);
//          }
//        });
//      });
//      console.log('Test data fetched:', data);
//      setResponse(data);
//    } catch (err) {
//      console.error('Error fetching test data:', err);
//      setError(err.message);
//    } finally {
//      setIsLoading(false);
//    }
//  };
//
//  const getImageFormat = (type) => {
//    if (type.includes('jpeg') || type.includes('jpg')) return 'JPEG';
//    if (type.includes('png')) return 'PNG';
//    if (type.includes('gif')) return 'GIF';
//    return 'Unknown';
//  };
//
//  return (
//    <View style={{ flex: 1 }}>
//      {/* Loading Modal */}
//      <Modal
//        transparent={true}
//        visible={modalVisible}
//        animationType="slide"
//      >
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <ActivityIndicator size="large" color="#0000ff" />
//          <Text>Loading Model...</Text>
//        </View>
//      </Modal>
//
//      {/* Camera Component UI */}
//      <Button title="Open Camera" onPress={openCamera} />
//      <Button title="Open Image Picker" onPress={openImagePicker} />
//      <Button title="Test Fetch" onPress={testFetch} />
//
//      {/* Web Environment File Input */}
//      {Platform.OS === 'web' && (
//        <input
//          type="file"
//          accept="image/*"
//          onChange={(event) => {
//            const file = event.target.files[0];
//            if (file) {
//              const reader = new FileReader();
//              reader.onload = () => {
//                const uri = reader.result;
//                console.log('Image file selected:', uri);
//                setPhotoUri(uri);
//                processImage(uri);
//              };
//              reader.readAsDataURL(file);
//            }
//          }}
//        />
//      )}
//
//      {photoUri && <Text>Photo URI: {photoUri}</Text>}
//      {imageFormat && <Text>Image Format: {imageFormat}</Text>}
//      {response && <Text>Response: {JSON.stringify(response)}</Text>}
//      {error && <Text>Error: {error}</Text>}
//      <Text>Status: {statusMessage}</Text>
//      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//    </View>
//  );
//};
//
//export default CameraComponent;




import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Modal, Button, Platform } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import RNFS from 'react-native-fs';

import { fetch } from '@tensorflow/tfjs-react-native';

async function fetchModelFiles() {
  try {
    console.log('Fetching model JSON...');
    const modelJsonResponse = await fetch('https://attendance.mietjmu.in/models/model.json');
    if (!modelJsonResponse.ok) {
      throw new Error(`Model JSON fetch failed with status ${modelJsonResponse.status}`);
    }
    const modelJson = await modelJsonResponse.json();
    console.log('Model JSON fetched successfully.');

    console.log('Fetching weights binary...');
    const weightsBinResponse = await fetch('https://attendance.mietjmu.in/models/group1-shard1of1.bin');
    if (!weightsBinResponse.ok) {
      throw new Error(`Weights binary fetch failed with status ${weightsBinResponse.status}`);
    }
    const weightsBin = await weightsBinResponse.arrayBuffer();
    console.log('Weights binary fetched successfully.');

    console.log('Weights binary size:', weightsBin.byteLength);

    await storeModelFiles(modelJson, weightsBin);
    console.log('Model files stored successfully.');

    return { modelJson, weightsBin };
  } catch (error) {
    console.error('Error fetching model files:', error);
    throw error;
  }
}

//async function fetchModelFiles() {
//  try {
//    console.log('Fetching model JSON...');
//    const modelJsonResponse = await fetch('https://attendance.mietjmu.in/models/model.json');
//    if (!modelJsonResponse.ok) {
//      throw new Error(`Model JSON fetch failed with status ${modelJsonResponse.status}`);
//    }
//    const modelJson = await modelJsonResponse.json();
//    console.log('Model JSON fetched successfully.');
//
//    console.log('Fetching weights binary...');
//    const weightsBinResponse = await fetch('https://attendance.mietjmu.in/models/group1-shard1of1.bin');
//    if (!weightsBinResponse.ok) {
//      throw new Error(`Weights binary fetch failed with status ${weightsBinResponse.status}`);
//    }
//    const weightsBin = await weightsBinResponse.arrayBuffer();
//    console.log('Weights binary fetched successfully.');
//
//    await storeModelFiles(modelJson, weightsBin);
//    console.log('Model files stored successfully.');
//
//    return { modelJson, weightsBin };
//  } catch (error) {
//    console.error('Error fetching model files:', error);
//    throw error;
//  }
//}

async function storeModelFiles(modelJson, weightsBin) {
  try {
    const modelJsonPath = `${RNFS.DocumentDirectoryPath}/model.json`;
    const weightsBinPath = `${RNFS.DocumentDirectoryPath}/weights.bin`;

    const modelPathExists = await RNFS.exists(modelJsonPath);
    if (!modelPathExists) {
      console.log(`No file found at ${modelJsonPath}. Proceeding to store it.`);
      await RNFS.writeFile(modelJsonPath, JSON.stringify(modelJson));
      console.log('Model JSON stored successfully.');
    } else {
      console.log(`File already exists at ${modelJsonPath}`);
    }

    const weightsPathExists = await RNFS.exists(weightsBinPath);
    if (!weightsPathExists) {
      console.log(`No file found at ${weightsBinPath}. Proceeding to store it.`);
      const uint8Array = new Uint8Array(weightsBin);
      await RNFS.writeFile(weightsBinPath, uint8Array);
      console.log('Weights binary stored successfully.');
    } else {
      console.log(`File already exists at ${weightsBinPath}`);
    }
  } catch (error) {
    console.error('Error storing model files:', error);
    throw error;
  }
}

const ModelLoader = () => {
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const { modelJson, weightsBin } = await fetchModelFiles();
        console.log('Model files loaded:', { modelJson, weightsBin });
//        model = await tf.loadLayersModel(tf.io.browserFiles([modelJson, weightsBin]));


console.log('Loading model from storage');
  const model = await tf.loadLayersModel(bundleResourceIO(modelJson, weightsBin));
 console.log('Loaded MOdels from storage');

//        console.log('Loading model from storage');
//       const model = await tf.loadLayersModel(tf.io.fromMemory(modelJson, weightsBin));
//        console.log('Loaded MOdels from storage');

        setModel({ modelJson, weightsBin });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadModel();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      <Text>Model Loaded Successfully!</Text>
      {/* Render model or other components here */}
    </View>
  );
};

export default ModelLoader;



















//import React, { useEffect, useState } from 'react';
//import { View, Text, ActivityIndicator } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-react-native';
//
//const FetchTest = () => {
//  const [data, setData] = useState(null);
//  const [error, setError] = useState(null);
//  const [loading, setLoading] = useState(true);
//  const [model, setModel] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('');
//
//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        // Fetch the model JSON file as ArrayBuffer
//        const response = await fetch('https://attendance.mietjmu.in/models/model.json');
//        const arrayBuffer = await response.arrayBuffer();
//
//        // Convert ArrayBuffer to string
//        const text = arrayBufferToString(arrayBuffer);
//
//        // Parse JSON string
//        const result = JSON.parse(text);
//        setData(result);
//
//        // Load the TensorFlow model
//        await loadModel();
//      } catch (err) {
//        setError(err.message);
//      } finally {
//        setLoading(false);
//      }
//    };
//
//    const arrayBufferToString = (buffer) => {
//      const bytes = new Uint8Array(buffer);
//      let string = '';
//      for (let i = 0; i < bytes.byteLength; i++) {
//        string += String.fromCharCode(bytes[i]);
//      }
//      return string;
//    };
//
//    const loadModel = async () => {
//      setStatusMessage('Loading model...');
//      setLoading(true);
//
//      try {
//        await tf.ready();
//
//        const modelUrl = 'https://attendance.mietjmu.in/models/model.json'; // Ensure this URL is correct
//
//        // Load the TensorFlow.js model
//        const model = await tf.loadGraphModel(modelUrl);
//
//        setModel(model);
//        setStatusMessage('Model loaded successfully');
//      } catch (error) {
//        console.error('Error loading model:', error);
//        setStatusMessage('Error loading model');
//      } finally {
//        setLoading(false);
//      }
//    };
//
//    fetchData();
//  }, []);
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" />;
//  }
//
//  if (error) {
//    return <Text>Error: {error}</Text>;
//  }
//
//  return (
//    <View>
//      <Text>Fetched Data: {JSON.stringify(data)}</Text>
//      {statusMessage && <Text>{statusMessage}</Text>}
//      {model && <Text>Model is loaded and ready.</Text>}
//    </View>
//  );
//};
//
//export default FetchTest;







//code snippet to test fetch api
//import React, { useEffect, useState } from 'react';
//import { View, Text, ActivityIndicator } from 'react-native';
//
//const FetchTest = () => {
//  const [data, setData] = useState(null);
//  const [error, setError] = useState(null);
//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    const testFetch = async () => {
//      try {
//        const response = await fetch('https://attendance.mietjmu.in/models/model.json');
//        const result = await response.json();
//        setData(result);
//      } catch (err) {
//        setError(err.message);
//      } finally {
//        setLoading(false);
//      }
//    };
//
//    testFetch();
//  }, []);
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" />;
//  }
//
//  if (error) {
//    return <Text>Error: {error}</Text>;
//  }
//
//  return <Text>Fetched Data: {JSON.stringify(data)}</Text>;
//};
//
//export default FetchTest;




//import React, { useEffect } from 'react';
//import { View, Text } from 'react-native';
//
//const FetchTestComponent = () => {
//  useEffect(() => {
//    const testFetch = async () => {
//      try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//        const data = await response.json();
//        console.log('Fetch test successful:', data);
//      } catch (error) {
//        console.error('Fetch test failed:', error);
//      }
//    };
//
//    testFetch();
//  }, []);
//
//  return (
//    <View>
//      <Text>Check the console for fetch test results.</Text>
//    </View>
//  );
//};
//
//export default FetchTestComponent;









//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-core';
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
//import * as FileSystem from 'expo-file-system';
//import axios from 'axios';
//
//// URLs to your model and weights
//const MODEL_URL = 'https://attendance.mietjmu.in/models/model.json';
//const WEIGHTS_URL = 'https://attendance.mietjmu.in/models/group1-shard1of1.bin';
//
//const createFaceMesh = async (imageURI) => {
//  await tf.ready();
//
//  // Fetch model and weights
//  const modelJson = await axios.get(MODEL_URL, { responseType: 'json' });
//  const modelWeights = await axios.get(WEIGHTS_URL, { responseType: 'arraybuffer' });
//
//  // Load the model
//  const detectorConfig = {
//    runtime: 'tfjs',
//    landmarkModelUrl: modelJson.data,
//    weights: modelWeights.data,
//  };
//  const detector = await faceLandmarksDetection.createDetector(
//    faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
//    detectorConfig
//  );
//
//  // Load and decode the image
//  const imgB64 = await FileSystem.readAsStringAsync(imageURI, {
//    encoding: FileSystem.EncodingType.Base64,
//  });
//  const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
//  const raw = new Uint8Array(imgBuffer);
//  const imageTensor = decodeJpeg(raw);
//
//  // Estimate face mesh
//  const estimationConfig = { flipHorizontal: false, staticImageMode: true };
//  const faceMesh = await detector.estimateFaces(imageTensor, estimationConfig);
//
//  console.log(faceMesh);
//};
//
//export default createFaceMesh;






//import React from 'react';
//import { View, StyleSheet, Text } from 'react-native';
//import { WebView } from 'react-native-webview';
//
//const App = () => {
//  return (
//    <View style={styles.container}>
//      <WebView
//        source={{ uri: 'https://attendance.mietjmu.in' }}
//        style={styles.webview}
//        onLoadStart={() => console.log('Loading started')}
//        onError={(error) => console.log('WebView error:', error)}
//        onLoad={() => console.log('WebView loaded')}
//        onLoadEnd={() => console.log('Loading ended')}
//      />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//  webview: {
//    flex: 1,
//    width: '100%',
//  },
//});
//
//export default App;







//import React, {Component} from 'react';
//import {
//  Platform,
//  StyleSheet,
//  Text,
//  View,
//  TouchableOpacity,
//  ToastAndroid,
//  ListView,
//  TextInput,
//  TouchableHighlight,
//  DeviceEventEmitter
//} from 'react-native';
//import Camera from 'react-native-facerecognition';
//import DialogManager, { SlideAnimation, DialogContent, DialogTitle, DialogButton } from 'react-native-dialog-component';
//
//
//export default class App extends Component {
//  constructor(props) {
//    super(props);
//    this.ds = new ListView.DataSource({
//      rowHasChanged:(r1,r2) => r1 !== r2
//    });
//    const faces = [];
//    this.state = {
//      dataSource: this.ds.cloneWithRows(faces),
//      captured: 1,
//      faces: faces
//    };
//
//  }
//  onTrained = () => {
//      ToastAndroid.show("Trained", ToastAndroid.SHORT);
//  }
//  onUntrained = ({error}) => {
//    /* ERROR
//    * UNKNOWN_NAME
//    * TRAINED_FAILED
//    */
//   switch(error) {
//     case "UNKNOWN_NAME":
//        ToastAndroid.show("Add a name", ToastAndroid.SHORT);
//        break;
//      case "TRAINED_FAILED":
//          ToastAndroid.show("Trained failed", ToastAndroid.SHORT);
//          break;
//   }
//
//  }
//  onRecognized = ({name, confidence}) => {
//    if(confidence < 100)
//      ToastAndroid.show("Recognized: " + name + " and Confidence " + confidence, ToastAndroid.LONG)
//
//  }
//  onUnrecognized = ({error}) => {
//    /* ERROR
//    * UNRECOGNIZED
//    * EMPTY
//    */
//   switch(error) {
//    case "UNRECOGNIZED":
//       ToastAndroid.show("Untrained face", ToastAndroid.SHORT);
//       break;
//     case "EMPTY":
//         ToastAndroid.show("Train some faces", ToastAndroid.SHORT);
//         break;
//    }
//  }
//  render() {
//    console.disableYellowBox = true;
//    return (
//      <View style={styles.container}>
//        <Camera
//          ref={(cam) => {
//            this.camera = cam;
//          }}
//          style={styles.preview}
//          aspect={Camera.constants.Aspect.fill}
//          captureQuality={Camera.constants.CaptureQuality.high}
//          //touchToFocus
//          //torchMode={Camera.constants.TorchMode.on}
//          //rotateMode={Camera.constants.RotateMode.on}
//          cameraType={Camera.constants.CameraType.front}
//          model = {Camera.constants.Model.landmarks}
//          //dataset
//          distance = {200}
//          onTrained = {this.onTrained}
//          onRecognized = {this.onRecognized}
//          onUntrained = {this.onUntrained}
//          onUnrecognized = {this.onUnrecognized}
//        />
//        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
//        <TouchableOpacity
//            onPress={this.takePicture.bind(this)}
//            style = {styles.capture}
//        >
//            <Text style={{fontSize: 14}}> SNAP </Text>
//        </TouchableOpacity>
//        <TouchableOpacity
//            onPress={this.identify}
//            style = {styles.capture}
//        >
//            <Text style={{fontSize: 14}}> Recognize </Text>
//        </TouchableOpacity>
//        <TouchableOpacity
//            onPress={this.clear.bind(this)}
//            style = {styles.capture}
//        >
//            <Text style={{fontSize: 14}}> Clear </Text>
//        </TouchableOpacity>
//        </View>
//      </View>
//    );
//  }
//  takePicture = async function() {
//    if (this.camera) {
//      try {
//        await this.camera.takePicture()
//        this.showPanel()
//      } catch(err) {
//        /* ERROR CODE
//        * UNKNOWN_FACE
//        * BLURRED_IMAGE
//        */
//       switch(err.code) {
//        case "UNKNOWN_FACE":
//           ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
//           break;
//         case "BLURRED_IMAGE":
//            ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
//            break;
//      }
//    }
//  }
//}
//
//  identify = async () => {
//    if (this.camera) {
//      try {
//        await this.camera.identify();
//      } catch(err) {
//        switch(err.code) {
//          case "UNKNOWN_FACE":
//             ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
//             break;
//           case "BLURRED_IMAGE":
//               ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
//               break;
//        }
//      }
//    }
//  }
//
//  clear() {
//    try {
//      this.camera.clear()
//      ToastAndroid.show("Cleared", ToastAndroid.SHORT);
//    } catch(err) {
//      ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
//    }
//  }
//  showPanel() {
//    if(this.state.faces.length == 0)
//      this.newFacePanel()
//    else {
//      DialogManager.show({
//        title: 'Trained Faces',
//        titleAlign: 'center',
//        haveOverlay: false,
//        animationDuration: 200,
//        SlideAnimation: new SlideAnimation({slideFrom: 'top'}),
//        children: (
//          <DialogContent>
//              <View>
//                <ListView dataSource = {this.state.dataSource} renderRow = {this.renderRow.bind(this)} />
//              </View>
//              <DialogButton text = "Close" align = 'right' onPress = {() => DialogManager.dismiss()} />
//              <DialogButton text = "New Face" align = 'right' onPress = {() => this.newFacePanel()} />
//          </DialogContent>
//        ),
//      }, () => {
//        console.log('callback - show')
//      });
//    }
//  }
//  newFacePanel() {
//    DialogManager.show({
//      title: 'Train Face',
//      titleAlign: 'center',
//      haveOverlay: false,
//      animationDuration: 200,
//      SlideAnimation: new SlideAnimation({slideFrom: 'top'}),
//      children: (
//        <DialogContent>
//            <View>
//              <TextInput placeholder="face name" onChangeText={(fname) => this.setState({fname})} />
//            </View>
//          <DialogButton text = "Save" onPress= {() => this.faceDetails()}/>
//        </DialogContent>
//      ),
//    }, () => {
//      console.log('callback - show');
//    });
//  }
//  faceDetails() {
//    const faces = [...this.state.faces, {fname: this.state.fname, captured: this.state.captured}]
//    const info = {fname: this.state.fname}
//    this.camera.train(info)
//    this.setState({dataSource: this.ds.cloneWithRows(faces), faces})
//    DialogManager.dismissAll()
//  }
//  saveCaptureImage(faceData) {
//    const slice = this.state.faces.slice()
//      slice.map((face) => {
//        if(face.fname == faceData.fname)
//          face.captured++
//      })
//      this.setState({dataSource: this.ds.cloneWithRows(slice)})
//      const info = {fname: faceData.fname}
//      this.camera.train(info)
//    DialogManager.dismiss()
//  }
//  renderRow(rowData) {
//    return(
//          <TouchableHighlight onPress= {() => this.saveCaptureImage(rowData)} underlayColor='transparent' >
//            <View style = {{
//                flex:1,
//                flexDirection: 'row',
//                padding: 15,
//                alignItems: 'center',
//                borderColor: '#D7D7D7',
//                borderBottomWidth: 1
//            }}>
//            <Text style = {{fontSize: 16}}>{rowData.captured}</Text>
//                <View style = {{paddingLeft: 20}}>
//                  <Text style = {{fontSize: 18}}>{rowData.fname}</Text>
//                </View>
//            </View>
//          </TouchableHighlight>
//    );
//  }
//}
//
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    flexDirection: 'column',
//    backgroundColor: 'black'
//  },
//  preview: {
//    flex: 1,
//  },
//  capture: {
//    flex: 0,
//    backgroundColor: '#fff',
//    borderRadius: 5,
//    padding: 15,
//    paddingHorizontal: 20,
//    alignSelf: 'center',
//    margin: 20
//  }
//});
















//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, SafeAreaView, ScrollView, Platform, PermissionsAndroid } from 'react-native';
//import { initializeApp } from '@firebase/app';
//import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import AuthScreen from './src/AuthScreen.js';
//import AppNavigator from './AppNavigator.js';
//
//const firebaseConfig = {
//  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
//  authDomain: "recognition-1bf05.firebaseapp.com",
//  projectId: "recognition-1bf05",
//  storageBucket: "recognition-1bf05.appspot.com",
//  messagingSenderId: "428104914028",
//  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
//  measurementId: "G-BMFXKWXBM3"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Configure Google Sign-In
//GoogleSignin.configure({
//  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
//});
//
//const App = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [isLogin, setIsLogin] = useState(true);
//
//  const auth = getAuth(app);
//
//  useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (user) => {
//      setUser(user);
//    });
//    return () => unsubscribe();
//  }, [auth]);
//
//  const handleAuthentication = async () => {
//    try {
//      if (isLogin) {
//        // Sign in
//        await signInWithEmailAndPassword(auth, email, password);
//        console.log('User signed in successfully!');
//      } else {
//        // Sign up
//        await createUserWithEmailAndPassword(auth, email, password);
//        console.log('User created successfully!');
//      }
//    } catch (error) {
//      console.error('Authentication error:', error.message);
//    }
//  };
//
//  const handleGoogleSignIn = async () => {
//    try {
//      if (Platform.OS === 'android') {
//        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.GET_ACCOUNTS);
//      }
//      await GoogleSignin.hasPlayServices();
//      const { idToken } = await GoogleSignin.signIn();
//      const googleCredential = GoogleAuthProvider.credential(idToken);
//      await signInWithCredential(auth, googleCredential);
//      console.log('User signed in with Google!');
//    } catch (error) {
//      console.error('Google Sign-In error:', error.message);
//    }
//  };
//
//  return (
//    <SafeAreaView style={styles.container}>
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        {user ? (
//          <AppNavigator />
//        ) : (
//          <AuthScreen
//            email={email}
//            setEmail={setEmail}
//            password={password}
//            setPassword={setPassword}
//            isLogin={isLogin}
//            setIsLogin={setIsLogin}
//            handleAuthentication={handleAuthentication}
//            handleGoogleSignIn={handleGoogleSignIn}
//          />
//        )}
//      </ScrollView>
//    </SafeAreaView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//  },
//  scrollContainer: {
//    flexGrow: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});
//
//export default App;







