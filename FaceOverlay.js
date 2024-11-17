import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const FaceOverlay = ({ faces }) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Svg height="100%" width="100%">
        {faces.map((face, index) => (
          <Rect
            key={index}
            x={face.box.x}
            y={face.box.y}
            width={face.box.width}
            height={face.box.height}
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
        ))}
      </Svg>
    </View>
  );
};

export default FaceOverlay;
