import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';




const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, handleGoogleSignIn }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="black"
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign In with Google" onPress={handleGoogleSignIn} color="#db4437" />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
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

export default AuthScreen;