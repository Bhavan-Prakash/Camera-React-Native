import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';

const FaceApiWebView = () => {
  // Define HTML content with face-api.js setup
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Face API</title>
      <script defer src="https://cdn.jsdelivr.net/npm/face-api.js"></script>
      <script>
        async function setupFaceApi() {
          // Load models
          await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
          await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
          await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        }

        // Function to process image passed from React Native
        async function processImage(imageUri) {
          const img = document.createElement('img');
          img.src = imageUri;
          img.onload = async () => {
            const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
            console.log(detections);
            // You can send results back to React Native if needed
          };
        }

        window.processImage = processImage;
        setupFaceApi();
      </script>
    </head>
    <body>
      <div id="container"></div>
    </body>
    </html>
  `;

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default FaceApiWebView;
