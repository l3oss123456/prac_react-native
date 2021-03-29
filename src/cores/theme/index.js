import {StyleSheet} from 'react-native';

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    paddingTop: 30,
    // backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 24,
    opacity: 0.6,
  },
  //Table Styles
  tableHead: {height: 40, backgroundColor: '#f1f8ff'},
  tableText: {margin: 6, textAlign: 'center'},
  tableEvenColumn: {backgroundColor: '#ffffff'},
});

export default {
  lightTheme,
};
