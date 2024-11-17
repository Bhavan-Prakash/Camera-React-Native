//import React, { useState, useEffect } from 'react';
//import { View, Text, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//
//const Hello = () => {
//  const [hasPermission, setHasPermission] = useState(false);
//  const devices = useCameraDevices();
//  const frontDevice = devices.find(device => device.position === 'front'); // Accessing front camera
//
//  useEffect(() => {
//    const requestCameraPermission = async () => {
//      if (Platform.OS === 'android') {
//        try {
//          const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
//          const result = await PermissionsAndroid.check(permission);
//          if (result === PermissionsAndroid.RESULTS.GRANTED) {
//            setHasPermission(true);
//          } else {
//            const requestResult = await PermissionsAndroid.request(permission);
//            setHasPermission(requestResult === PermissionsAndroid.RESULTS.GRANTED);
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
//  if (!hasPermission) {
//    return <View style={styles.container}><Text>No Camera Permission</Text></View>;
//  }
//
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
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
//
//export default Hello;



import {React, useEffect, useState} from 'react';
import { StyleSheet, View,Text, PermissionsAndroid } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const Hello = () => {

  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const backDevice = devices.find(device => device.position === 'back'); // Accessing back camera
  const frontDevice = devices.find(device => device.position === 'front'); // Accessing front camera


useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
          const result = await PermissionsAndroid.check(permission);
          if (result === PermissionsAndroid.RESULTS.GRANTED) {
            setHasPermission(true);
          } else {
            const requestResult = await PermissionsAndroid.request(permission);
            if (requestResult === PermissionsAndroid.RESULTS.GRANTED) {
              setHasPermission(true);
            } else {
              setHasPermission(false);
            }
          }
        } catch (err) {
          console.warn(err);
          setHasPermission(false);
        }
      } else if (Platform.OS === 'ios') {
        setHasPermission(true); // Assuming permission is handled via Info.plist
      }
    };

    requestCameraPermission();
  }, []);



  // Ensure the device is available before rendering the Camera component
//  if (frontDevice == null) {
//    return <View style={styles.container}><Text>Loading camera...</Text></View>;
//  }

  return (
//    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={frontDevice}
        isActive={true}
      />
//    </View>
  );
};

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});

export default Hello;





