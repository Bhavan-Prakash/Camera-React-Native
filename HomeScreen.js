
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { DataTable } from 'react-native-paper';


const HomeScreen = ({ navigation }) => {
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

   tableContainer: {
     flex: 1,
     width: '100%',
     padding: 10,
   },
   tableView: {
     width: '100%',
   },
 });

export default HomeScreen;
