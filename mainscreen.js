import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

import AuthScreen from './src/AuthScreen.js';
import AttendanceTable from './src/AttendanceTable.js';
import Hello from './src/Hello.js';


const firebaseConfig = {
  apiKey: "AIzaSyCYs3Jiv-_dbB4j_AyQPsWD4lsiHbZioOs",
  authDomain: "recognition-1bf05.firebaseapp.com",
  projectId: "recognition-1bf05",
  storageBucket: "recognition-1bf05.appspot.com",
  messagingSenderId: "428104914028",
  appId: "1:428104914028:web:e97fecaf4a9d151c637449",
  measurementId: "G-BMFXKWXBM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: '428104914028-anlapbffo3t9nonvrr5fju2pr5nash7l.apps.googleusercontent.com',
});


const MainScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
      } else {
        // Sign up
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully!');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.GET_ACCOUNTS);
      }
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredential);
      console.log('User signed in with Google!');
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Attendance Records</Text>
        { user ? (
          <AttendanceTable />
        ) : (
          <AuthScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
            handleGoogleSignIn={handleGoogleSignIn}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    button: {
//    color: 'black',
//    backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
    width: '100%',
    },



     container: {
        flex: 1,
        backgroundColor: '#fff',
//        alignItems: 'center',
//        justifyContent: 'flex-start',
//        padding: 16,
    },
//    title: {
//        fontSize: 24,
//        fontWeight: 'bold',
//        marginBottom: 20,
//    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    tableContainer: {
        width: '100%',
//        paddingHorizontal: 16,
    },

    loader: {
        flex: 1,
        justifyContent: 'center',
    },


//    container: {
//        flex: 1,
//    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    authContainer: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        color: 'black',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        borderRadius: 4,
    },
    buttonContainer: {
        marginBottom: 16,
    },
    toggleText: {
        color: '#3498db',
        textAlign: 'center',
    },
    bottomContainer: {
        marginTop: 20,
    },
});

export default MainScreen;