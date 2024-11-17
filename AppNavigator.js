//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//
//// Import your screens
//import HomeScreen from './HomeScreen.js';
//import DetailsScreen from './DetailsScreen.js';
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator
//        initialRouteName="HomeScreen"
//        screenOptions={{
//          headerShown: true, // Show header for all screens
//        }}
//      >
//        <Stack.Screen
//          name="HomeScreen"
//          component={HomeScreen}
//          options={{ title: 'Home' }}
//        />
//        <Stack.Screen
//          name="DetailsScreen"
//          component={DetailsScreen}
//          options={{ title: 'Details' }}
//        />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;


//import React from 'react';
//import { Button } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//
//// Import your screens
//import HomeScreen from './HomeScreen.js';
//import DetailsScreen from './DetailsScreen.js';
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator
//        initialRouteName="HomeScreen"
//        screenOptions={{
//          headerShown: true, // Show header for all screens
//        }}
//      >
//        <Stack.Screen
//          name="HomeScreen"
//          component={HomeScreen}
//          options={({ navigation }) => ({
//            title: 'Home',
//            headerRight: () => (
//              <Button
//                onPress={() => navigation.navigate('DetailsScreen')}
//                title="Go to Details"
//                color="#000"
//              />
//            ),
//          })}
//        />
//        <Stack.Screen
//          name="DetailsScreen"
//          component={DetailsScreen}
//          options={{ title: 'Details' }}
//        />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import HomeScreen from './HomeScreen.js';
import DetailsScreen from './DetailsScreen.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: true, // Show header for all screens
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsScreen')}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Mark Attendance</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 30,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AppNavigator;

