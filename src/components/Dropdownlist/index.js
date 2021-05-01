import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as R from 'ramda';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownlistComponent = ({
  minHeight,
  items,
  disabled,
  defaultValue,
  placeholder,
  containerStyle,
  style,
  itemStyle,
  dropDownStyle,
  DropdownlistName,
  onChangeItem,
}) => {
  return (
    <View
      // style={{minHeight: !R.isNil(minHeight) ? minHeight : 120}}
      style={{
        minHeight: !R.isNil(minHeight) ? minHeight : 0,
        // minHeight: !R.isNil(minHeight) ? minHeight : 120,
        // position: 'absolute',
      }}>
      <DropDownPicker
        items={!R.isNil(items) && items}
        disabled={!R.isNil(disabled) && disabled}
        defaultValue={!R.isNil(defaultValue) && defaultValue}
        placeholder={!R.isNil(placeholder) && placeholder}
        containerStyle={
          !R.isNil(containerStyle)
            ? containerStyle
            : {height: 40, marginTop: 10, width: '50%'}
        }
        style={style ? style : {backgroundColor: '#fafafa'}}
        itemStyle={
          !R.isNil(itemStyle)
            ? itemStyle
            : {
                justifyContent: 'flex-start',
              }
        }
        dropDownStyle={
          !R.isNil(dropDownStyle) ? dropDownStyle : {backgroundColor: '#fafafa'}
        }
        placeholderStyle={{
          // fontWeight: 'bold',
          textAlign: 'center',
        }}
        activeItemStyle={{
          fontWeight: 'bold',
        }}
        onChangeItem={item => {
          if (!R.isNil(onChangeItem)) {
            onChangeItem(DropdownlistName, item.value);
          }
        }}
      />
    </View>
  );
};
export default DropdownlistComponent;
