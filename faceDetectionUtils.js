// faceDetectionUtils.js

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { fetch, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

// Load TensorFlow.js model
export const loadModel = async () => {
  await tf.ready();
  return await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);
};

// Detect faces in an image
export const detectFace = async (imageUri, model) => {
  try {
    const response = await fetch(imageUri, {}, { isBinary: true });
    const imageData = await response.arrayBuffer();
    const imageTensor = decodeJpeg(new Uint8Array(imageData));

    const predictions = await model.estimateFaces(imageTensor);
    return predictions.length > 0;
  } catch (error) {
    console.error('Error detecting face:', error);
    return false;
  }
};
