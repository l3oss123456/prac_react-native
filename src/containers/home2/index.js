/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import ListingTable from '../../components/ListingTable/index';
 // import type {Node} from 'react';
 
 import {NativeRouter, Link} from 'react-router-native';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Modal,
   Pressable,
   Alert,
   Button,
   useWindowDimensions,
   TouchableOpacity,
   Dimensions,
 } from 'react-native';
 import * as R from 'ramda';
 import theme from '../../cores/theme';
 
 const home = ({history, location}) => {
   const title = [
     // {display: 'National ID', value: 'nationalID', width: 120},
     {display: 'First name', value: 'firstName', width: 100},
     {display: 'Last name', value: 'lastName', width: 110},
     {display: 'Age', value: 'age', width: 60},
     {display: 'Action', value: 'action', width: 140},
   ];
   const [listData, setListData] = useState([]);
   const [themeSelected, setThemeSelected] = useState('lightTheme');
 
   const handleEdit = (key, data) => {
     history.push(`/editUser`, {
       type: 'edit',
       key: key,
       data: data,
       listData: listData,
     });
   };
 
   const handleDelete = key => {
     let _listData = [...listData];
     _listData.splice(key, 1);
     setListData(_listData);
   };
 
   useEffect(() => {
     if (!R.isNil(location.state)) {
       const {listData} = location.state;
       setListData(listData);
     } else {
       // setText('yoyo');
       const _data = [];
       for (let i = 1; i <= 10; i++) {
         _data.push({
           nationalID: `1115559632148`,
           firstName: `first name${i}`,
           lastName: `last name${i}`,
           age: i.toString(),
           key: i - 1,
           gender: 'female',
           birthDate: '20',
           birthMonth: '7',
           birthYear: '2560',
         });
       }
       setListData(_data);
     }
   }, []);
 
   const clickMe = () => {
     Alert.alert('Thanks');
   };
 
   return (
     <View
       style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
       }}>
       {/* heading page */}
       <View
         style={{
           display: 'flex',
           flexDirection: 'row',
           alignItems: 'flex-start',
           zIndex: 1,
           marginTop: 30,
         }}>
         <View style={{flex: 0.1}}></View>
         <View style={{flex: 1}}>
           <Text style={theme[`${themeSelected}`].titleText}>User</Text>
         </View>
         <View style={{flex: 0.3}}></View>
         <View style={{flex: 0.5}}>
           <Button
             title="Add User"
             onPress={() =>
               history.push('/addUser', {type: 'add', listData: listData})
             }
           />
         </View>
         <View style={{flex: 0.1}}></View>
       </View>
 
       {/* table && search form */}
       <Text>
         <ListingTable
           title={title}
           data={listData}
           setData={setListData}
           handleEdit={handleEdit}
           handleDelete={handleDelete}
         />
       </Text>
     </View>
   );
 };
 
 export default home;
 