//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, TextInput, Button, ScrollView, SafeAreaView, ActivityIndicator,TouchableOpacity } from 'react-native';
//import axios from 'axios';
//import { DataTable } from 'react-native-paper';
//import Hello from './Hello.js';
//
//const AttendanceTable = () => {
//const [loading, setLoading] = useState(true);
//const [data, setData] = useState([]);
//const [showCamera, setShowCamera] = useState(false);
//
//const handlePress = () => {
//setShowCamera(!showCamera); // Toggle camera view
//                };
//
//useEffect(() => {
//axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//.then(response => {
//    console.log('API Response:', response.data);
//    setData(response.data.data || []);
//    setLoading(false);
//     })
//     .catch(error => {
//      console.error('Error fetching data:', error);
//      setLoading(false);
//      });
//       }, []);
//
//const handleButtonPress = () => {
//              //    setShowHello(true);
//       console.log('Mark Attendance button pressed');
//                };
//
//  if (loading) {
//       return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//    }
//
//return (
//        <ScrollView style={styles.scrollView}>
//          <View style={styles.tableContainer}>
//               <View style={styles.container}>
//                    <TouchableOpacity style={styles.button} onPress={handlePress}>
//                      <Text style={styles.buttonText}>{showCamera ? 'Hide Camera' : 'Show Camera'}</Text>
//                    </TouchableOpacity>
//                    {showCamera && <Hello />}
//                  </View>
////                      <View style={styles.button}>
////                        <Button title="Mark Attendance" onPress={handleButtonPress} color="black" />
////                      </View>
//                      <DataTable>
//                        <DataTable.Header>
//                          <DataTable.Title>Record ID</DataTable.Title>
//                          <DataTable.Title>Name</DataTable.Title>
//                          <DataTable.Title>Date</DataTable.Title>
//                          <DataTable.Title>Type</DataTable.Title>
//                        </DataTable.Header>
//                        {data.map((item, index) => (
//                          <DataTable.Row key={index}>
//                            <DataTable.Cell>{item.Record_ID}</DataTable.Cell>
//                            <DataTable.Cell>{item.name}</DataTable.Cell>
//                            <DataTable.Cell>{item.date}</DataTable.Cell>
//                            <DataTable.Cell>{item.type}</DataTable.Cell>
//                          </DataTable.Row>
//                        ))}
//                      </DataTable>
//                    </View>
//                  </ScrollView>
//                );
//              };
//
//              const styles = StyleSheet.create({
////                button: {
////                  alignItems: 'center',
////                  marginBottom: '5%',
////                  marginTop: '5%',
////                  width: '100%',
////                },
////                container: {
////                  flex: 1,
////                  backgroundColor: '#fff',
////                },
////                scrollView: {
////                  flex: 1,
////                  width: '100%',
////                },
////                tableContainer: {
////                  width: '100%',
////                },
////                loader: {
////                  flex: 1,
////                  justifyContent: 'center',
////                },
////                scrollContainer: {
////                  flexGrow: 1,
////                  justifyContent: 'center',
////                  alignItems: 'center',
////                },
////                authContainer: {
////                  width: '100%',
////                  maxWidth: 400,
////                  backgroundColor: '#fff',
////                  padding: 16,
////                  borderRadius: 8,
////                  elevation: 3,
////                },
////                title: {
////                  fontSize: 24,
////                  marginBottom: 16,
////                  textAlign: 'center',
////                },
////                input: {
////                  color: 'black',
////                  height: 40,
////                  borderColor: '#ddd',
////                  borderWidth: 1,
////                  marginBottom: 16,
////                  padding: 8,
////                  borderRadius: 4,
////                },
////                buttonContainer: {
////                  marginBottom: 16,
////                },
////                toggleText: {
////                  color: '#3498db',
////                  textAlign: 'center',
////                },
////                bottomContainer: {
////                  marginTop: 20,
////                },
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  button: {
//    backgroundColor: '#007bff',
//    padding: 10,
//    borderRadius: 5,
//  },
//  buttonText: {
//    color: '#fff',
//    fontSize: 16,
//  },
//              });
//
//export default AttendanceTable;

//running code
//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
//import axios from 'axios';
//import { DataTable } from 'react-native-paper';
//import Hello from './Hello.js'; // Assuming Hello.js is your camera component
//
//const AttendanceTable = () => {
//  const [loading, setLoading] = useState(true);
//  const [data, setData] = useState([]);
//  const [showCamera, setShowCamera] = useState(false);
//
//  const handlePress = () => {
//    setShowCamera(!showCamera);
//  };
//
//  useEffect(() => {
//    axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//      .then(response => {
//        console.log('API Response:', response.data);
//        setData(response.data.data || []);
//        setLoading(false);
//      })
//      .catch(error => {
//        console.error('Error fetching data:', error);
//        setLoading(false);
//      });
//  }, []);
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//  }
//
//  return (
//    <ScrollView style={styles.scrollView}>
//      <View style={styles.container}>
//
//        <TouchableOpacity style={styles.button} onPress={handlePress}>
//          <Text style={styles.buttonText}>{showCamera ? 'Go Back' : 'Mark Attendance'}</Text>
//        </TouchableOpacity>
//
//        {showCamera ? (
//
//          <Hello style={[styles.cameraView, { height: '80%' } ]} />  // Set height to 80%
//
//        ) : (
//          <DataTable style={styles.tableView}>
//            <DataTable.Header>
//              <DataTable.Title>Record ID</DataTable.Title>
//              <DataTable.Title>Name</DataTable.Title>
//              <DataTable.Title>Date</DataTable.Title>
//              <DataTable.Title>Type</DataTable.Title>
//            </DataTable.Header>
//            {data.map((item, index) => (
//              <DataTable.Row key={index}>
//                <DataTable.Cell>{item.Record_ID}</DataTable.Cell>
//                <DataTable.Cell>{item.name}</DataTable.Cell>
//                <DataTable.Cell>{item.date}</DataTable.Cell>
//                <DataTable.Cell>{item.type}</DataTable.Cell>
//              </DataTable.Row>
//            ))}
//          </DataTable>
//        )}
//      </View>
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor:'black',
//  },
//  button: {
//    backgroundColor: '#007bff',
//    padding: 10,
//    borderRadius: 5,
//    marginBottom: 20,
//  },
//  buttonText: {
//    color: '#fff',
//    fontSize: 16,
//  },
//  scrollView: {
//    flex: 1,
//    width: '100%',
//  },
//  loader: {
//    flex: 1,
//    justifyContent: 'center',
//  },
//  cameraView: {
//    flex: 1,
//    width: '100%',
//    backgroundColor: 'black',
//    height: '100%',
//  },
//  tableView: {
//    width: '100%',
//    // Additional styles for the table view if needed
//  },
//});
//
//export default AttendanceTable;

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import Hello from './Hello.js';

const AttendanceTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  const handlePress = () => {
    setShowCamera(!showCamera);
  };

  useEffect(() => {
    axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
      .then(response => {
        console.log('API Response:', response.data);
        setData(response.data.data || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>{showCamera ? 'Go Back' : 'Mark Attendance'}</Text>
        </TouchableOpacity>

        {showCamera ? (
          <Hello style={styles.cameraView} />
        ) : (
          <View style={styles.tableContainer}>
            <DataTable style={styles.tableView}>
              <DataTable.Header>
                <DataTable.Title>Record ID</DataTable.Title>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Date</DataTable.Title>
                <DataTable.Title>Type</DataTable.Title>
              </DataTable.Header>
              {data.map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{item.Record_ID}</DataTable.Cell>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.date}</DataTable.Cell>
                  <DataTable.Cell>{item.type}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  cameraView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  tableContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  tableView: {
    width: '100%',
  },
});

export default AttendanceTable;





















// App.js
//import React, { useState } from 'react';
//import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import Hello from './Hello.js'; // Import the Hello component
//
//const AttendanceTable = () => {
//  const [showCamera, setShowCamera] = useState(false);
//
//  const handlePress = () => {
//    setShowCamera(!showCamera); // Toggle camera view
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableOpacity style={styles.button} onPress={handlePress}>
//        <Text style={styles.buttonText}>{showCamera ? 'Hide Camera' : 'Show Camera'}</Text>
//      </TouchableOpacity>
//      {showCamera && <Hello />}
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
//  button: {
//    backgroundColor: '#007bff',
//    padding: 10,
//    borderRadius: 5,
//  },
//  buttonText: {
//    color: '#fff',
//    fontSize: 16,
//  },
//});
//
//export default AttendanceTable;














//import React, { useState, useEffect } from 'react';
//import { StyleSheet, View, Text, Button, ScrollView, ActivityIndicator } from 'react-native';
//import axios from 'axios';
//import { DataTable } from 'react-native-paper';
//import Hello from './Hello';
//
//const AttendanceTable = () => {
//  const [loading, setLoading] = useState(true);
//  const [data, setData] = useState([]);
//  const [showHello, setShowHello] = useState(false);
//
//  useEffect(() => {
//    axios.get('http://attendance.mietjmu.in/attendance_api.php?apikey=62efb85cbfabee6e479bce0095933554')
//      .then(response => {
//        console.log('API Response:', response.data);
//        setData(response.data.data || []);
//        <Text>setLoading(false)</Text>
//      })
//      .catch(error => {
//        console.error('Error fetching data:', error);
//        setLoading(false);
//      });
//  }, []);
//
//  const handleButtonPress = () => {
//    setShowHello(true); // Update state to show Hello component
//    console.log('Mark Attendance button pressed');
//  };
//
//  if (loading) {
//    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//  }
//
//  return (
//    <ScrollView style={styles.scrollView}>
//      <View style={styles.tableContainer}>
//        {showHello && <Hello />} {/* Conditionally render Hello component */}
//        <View style={styles.button}>
//          <Button title="Mark Attendance" onPress={handleButtonPress} color="black" />
//        </View>
//        <DataTable>
//          <DataTable.Header>
//            <DataTable.Title>Record ID</DataTable.Title>
//            <DataTable.Title>Name</DataTable.Title>
//            <DataTable.Title>Date</DataTable.Title>
//            <DataTable.Title>Type</DataTable.Title>
//          </DataTable.Header>
//          {data.map((item, index) => (
//            <DataTable.Row key={index}>
//              <DataTable.Cell>{item.Record_ID}</DataTable.Cell>
//              <DataTable.Cell>{item.name}</DataTable.Cell>
//              <DataTable.Cell>{item.date}</DataTable.Cell>
//              <DataTable.Cell>{item.type}</DataTable.Cell>
//            </DataTable.Row>
//          ))}
//        </DataTable>
//      </View>
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  button: {
//    alignItems: 'center',
//    marginBottom: '5%',
//    marginTop: '5%',
//    width: '100%',
//  },
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//  },
//  scrollView: {
//    flex: 1,
//    width: '100%',
//  },
//  tableContainer: {
//    width: '100%',
//  },
//  loader: {
//    flex: 1,
//    justifyContent: 'center',
//  },
//});
//
//export default AttendanceTable;
//
