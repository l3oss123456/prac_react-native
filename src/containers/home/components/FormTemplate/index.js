import React, {useState, useEffect} from 'react';
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
  TextInput,
  Dimensions,
} from 'react-native';
import * as R from 'ramda';
import calendar from '../../../../utils/calendar';
import Dropdownlist from '../../../../components/Dropdownlist/index';
import theme from '../../../../cores/theme/index';

const FormTemplate = ({history, match, location, data}) => {
  const genderOptions = [
    {label: 'male', value: 'male'},
    {label: 'female', value: 'female'},
  ];

  const {date, month, year} = calendar;
  const [text, setText] = useState({});
  const [themeSelected, setThemeSelected] = useState('lightTheme');

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    if (!R.isNil(location.state)) {
      const {type} = location.state;
      if (type === 'edit') {
        const {data} = location.state;
        setText(data);
      }
    }
  }, []);

  const handleSave = () => {
    if (
      !R.isNil(text.nationalID) &&
      !R.isEmpty(text.nationalID) &&
      !R.isNil(text.firstName) &&
      !R.isEmpty(text.firstName) &&
      !R.isNil(text.lastName) &&
      !R.isEmpty(text.lastName) &&
      !R.isNil(text.age) &&
      !R.isEmpty(text.age) &&
      !R.isNil(text.gender) &&
      !R.isEmpty(text.gender) &&
      !R.isNil(text.birthDate) &&
      !R.isEmpty(text.birthDate) &&
      !R.isNil(text.birthMonth) &&
      !R.isEmpty(text.birthMonth) &&
      !R.isNil(text.birthYear) &&
      !R.isEmpty(text.birthYear)
    ) {
      if (!R.isNil(location.state)) {
        const {key, listData, type} = location.state;
        let _listData = [...listData];
        if (type === 'edit') {
          _listData[key] = text;
        } else {
          let _text = {...text};
          _text = {..._text, key: listData.length};
          _listData = [..._listData, _text];
        }
        Alert.alert(`${type} user successful.`);
        history.push('/', {
          listData: _listData,
        });
      }
    } else {
      Alert.alert('Please input all from !');
    }
  };

  const handleChange = (type, value) => {
    setText({...text, [`${type}`]: value});
  };

  return (
    <View>
      {/* heading page */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          zIndex: 1,
          marginTop: 20,
          // marginBottom: 10,
        }}>
        <View style={{flex: 0.1}}></View>
        <View style={{flex: 1}}>
          <Text style={theme[`${themeSelected}`].titleText}>
            {location.state.type} User
          </Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={e => handleChange('firstName', e)}
        value={text && text.firstName ? text.firstName : ''}
        placeholder="First name"
      />

      <TextInput
        style={styles.input}
        onChangeText={e => handleChange('lastName', e)}
        value={text && text.lastName ? text.lastName : ''}
        placeholder="Last name"
      />

      <TextInput
        style={styles.input}
        onChangeText={e => handleChange('nationalID', e)}
        value={text && text.nationalID ? text.nationalID : ''}
        placeholder="National ID"
      />

      <TextInput
        style={styles.input}
        onChangeText={e => handleChange('age', e)}
        value={text && text.age ? text.age : ''}
        placeholder="Age"
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          zIndex: 1,
          position: 'absolute',
          bottom: 0,
        }}>
        <View style={{flex: 0.1}}></View>
        <View style={{flex: 1}}>
          <Button
            title="Back"
            color="red"
            //    onPress={() => clickMe()}
            onPress={() => history.push('/')}
          />
        </View>
        <View style={{flex: 0.3}}></View>
        <View style={{flex: 1}}>
          <Button
            style={{padding: 5}}
            color="green"
            title="Save"
            //    onPress={() => clickMe()}
            onPress={() => handleSave()}
          />
        </View>
        <View style={{flex: 0.1}}></View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Dropdownlist
          minHeight={190}
          items={date}
          defaultValue={text.birthDate ? text.birthDate : ''}
          placeholder="Birth Date"
          containerStyle={{height: 40, marginTop: 10, width: 120}}
          DropdownlistName="birthDate"
          onChangeItem={handleChange}
        />

        <Dropdownlist
          minHeight={190}
          items={month}
          defaultValue={text.birthMonth ? text.birthMonth : ''}
          placeholder="Birth Month"
          containerStyle={{height: 40, marginTop: 10, width: 120}}
          DropdownlistName="birthMonth"
          onChangeItem={handleChange}
        />

        <Dropdownlist
          minHeight={190}
          items={year}
          defaultValue={text.birthYear ? text.birthYear : ''}
          placeholder="Birth Year"
          containerStyle={{height: 40, marginTop: 10, width: 120}}
          DropdownlistName="birthYear"
          onChangeItem={handleChange}
        />
      </View>

      <Dropdownlist
        minHeight={110}
        items={genderOptions}
        defaultValue={text.gender ? text.gender : ''}
        placeholder="Gender"
        DropdownlistName="gender"
        onChangeItem={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default FormTemplate;
