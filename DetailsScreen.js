//import React from 'react';
//import { View, Text, Button, StyleSheet } from 'react-native';
//
//const DetailsScreen = ({ navigation }) => {
//  return (
//    <View style={styles.container}>
//      <Text style={styles.text}>Details Screen</Text>
//      <Button
//        title="Go back"
//        onPress={() => navigation.goBack()}
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
//  text: {
//    fontSize: 20,
//    marginBottom: 20,
//  },
//});
//
//export default DetailsScreen;

//working code
import {React, useEffect, useState} from 'react';
import { StyleSheet, View,Text, PermissionsAndroid } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const DetailsScreen = () => {

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
        setHasPermission(true);
      }
    };

    requestCameraPermission();
  }, []);

  return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={frontDevice}
        isActive={true}
      />

  );
};


export default DetailsScreen;







//import React, { useState, useRef } from 'react';
//import { View, Button, Image, StyleSheet, Platform, Text } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//import { detectFace } from './bottom.js'; // Adjust the path accordingly
//
//const FaceDetectionScreen = () => {
//  const [photoUri, setPhotoUri] = useState(null);
//  const [faces, setFaces] = useState([]);
//  const cameraRef = useRef(null);
//
//   const [hasPermission, setHasPermission] = useState(false);
//   const devices = useCameraDevices();
//   const backDevice = devices.find(device => device.position === 'back'); // Accessing back camera
//   const frontDevice = devices.find(device => device.position === 'front');
//
//  const takePicture = async () => {
//    if (cameraRef.current) {
//      try {
//        const photo = await cameraRef.current.takePhoto({
//          qualityPrioritization: 'speed',
//        });
//
//        setPhotoUri(photo.uri);
//
//        // Load the image and detect faces
//        const img = await fetch(photo.uri);
//        const imgBlob = await img.blob();
//        const imgElement = document.createElement('img');
//        imgElement.src = URL.createObjectURL(imgBlob);
//
//        // Wait for the image to load
//        imgElement.onload = async () => {
//          const predictions = await detectFace(imgElement);
//          setFaces(predictions);
//        };
//      } catch (error) {
//        console.error(error);
//      }
//    }
//  };
//
//  // Ensure the device is available before rendering the Camera component
//  if (frontDevice == null) {
//    return (
//      <View style={styles.container}>
//        <Text>Loading camera...</Text>
//      </View>
//    );
//  }
//
//  return (
//    <View style={styles.container}>
//      <Camera
//              style={StyleSheet.absoluteFill}
//              device={frontDevice}
//              isActive={true}
//            />
//      <Button title="Take Picture" onPress={takePicture} />
//      {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}
//      {/* Render face bounding boxes */}
//      {faces.map((face, index) => (
//        <View
//          key={index}
//          style={[
//            styles.boundingBox,
//            {
//              left: face.boundingBox.left,
//              top: face.boundingBox.top,
//              width: face.boundingBox.width,
//              height: face.boundingBox.height,
//            },
//          ]}
//        />
//      ))}
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
//  camera: {
//    flex: 1,
//    width: '100%',
//  },
//  image: {
//    width: 200,
//    height: 200,
//  },
//  boundingBox: {
//    position: 'absolute',
//    borderColor: 'red',
//    borderWidth: 2,
//  },
//});
//
//export default FaceDetectionScreen;
