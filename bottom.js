import * as tf from '@tensorflow/tfjs';
import { FaceLandmarksDetector } from '@tensorflow-models/face-landmarks-detection';

export const detectFace = async (image) => {
  // Load the model
  const detector = await FaceLandmarksDetector.load(
    FaceLandmarksDetector.SupportedPackages.mediapipeFacemesh
  );

  // Convert the image to a tensor
  const img = tf.browser.fromPixels(image);

  // Perform face detection
  const predictions = await detector.estimateFaces(img);

  // Clean up memory
  img.dispose();

  return predictions;
};
