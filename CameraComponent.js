//import React, { useEffect, useRef, useState } from 'react';
//import { View, Button, Text, Alert } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//import * as tf from '@tensorflow/tfjs';
//import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
//import * as facemesh from '@mediapipe/face_mesh';
//
//const CameraComponent = () => {
//  const [model, setModel] = useState(null);
//  const [photoUri, setPhotoUri] = useState(null);
//  const [statusMessage, setStatusMessage] = useState('Ready');
//  const cameraRef = useRef(null);
//  const [hasPermission, setHasPermission] = useState(false);
//
//  const devices = useCameraDevices();
//  const backDevice = devices.find(device => device.position === 'back'); // Accessing back camera
//  const device = devices.find(device => device.position === 'front');
//
//  useEffect(() => {
//    const loadModel = async () => {
//      try {
//        await tf.ready();
//        console.log('TensorFlow.js is ready');
//
//        // Load the face landmarks detection model
//        const faceModel = await faceLandmarksDetection.load(
//          faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
//        );
//        setModel(faceModel);
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
//        const imageTensor = tf.browser.fromPixels(imageBitmap);
//        console.log('Image Tensor:', imageTensor);
//
//        const predictions = await model.estimateFaces(imageTensor, false);
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
//      const detectedDescriptor = tf.tensor(prediction.landmarks); // Example: Ensure prediction.landmarks is valid
//
//      console.log('Detected Descriptor:', detectedDescriptor);
//
//      return knownFaceDescriptors.some(knownDescriptor => {
//        const knownDescriptorTensor = tf.tensor(knownDescriptor);
//        const similarity = tf.losses.cosineDistance(detectedDescriptor, knownDescriptorTensor, 0).dataSync()[0];
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



//import React, { useEffect, useRef, useState } from 'react';
//import { View, Button, Text, Alert } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//import * as tf from '@tensorflow/tfjs';
//import * as facemesh from '@mediapipe/face_mesh'; // Import MediaPipe Face Mesh
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
//        const faceMesh = new facemesh.FaceMesh({
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
//        const imageTensor = tf.browser.fromPixels(imageBitmap);
//        console.log('Image Tensor:', imageTensor);
//
//        // Process the image using MediaPipe Face Mesh
//        const predictions = await model.send({ image: imageTensor });
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
//      const detectedDescriptor = tf.tensor(prediction.landmarks); // Example: Ensure prediction.landmarks is valid
//
//      console.log('Detected Descriptor:', detectedDescriptor);
//
//      return knownFaceDescriptors.some(knownDescriptor => {
//        const knownDescriptorTensor = tf.tensor(knownDescriptor);
//        const similarity = tf.losses.cosineDistance(detectedDescriptor, knownDescriptorTensor, 0).dataSync()[0];
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



//
//import React, { useEffect, useRef, useState } from 'react';
//import { View, Button, Text, Alert } from 'react-native';
//import { Camera, useCameraDevices } from 'react-native-vision-camera';
//import * as tf from '@tensorflow/tfjs';
//import * as facemesh from '@mediapipe/face_mesh'; // Import MediaPipe Face Mesh
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
//        const faceMesh = new facemesh.FaceMesh({
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
//        const imageTensor = tf.browser.fromPixels(imageBitmap);
//        console.log('Image Tensor:', imageTensor);
//
//        // Process the image using MediaPipe Face Mesh
//        const predictions = await model.send({ image: imageTensor });
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
//      const detectedDescriptor = tf.tensor(prediction.landmarks); // Example: Ensure prediction.landmarks is valid
//
//      console.log('Detected Descriptor:', detectedDescriptor);
//
//      return knownFaceDescriptors.some(knownDescriptor => {
//        const knownDescriptorTensor = tf.tensor(knownDescriptor);
//        const similarity = tf.losses.cosineDistance(detectedDescriptor, knownDescriptorTensor, 0).dataSync()[0];
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
